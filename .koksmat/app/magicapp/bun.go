package magicapp

import (
	"context"
	"fmt"
	"log"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"
	"github.com/uptrace/bun/migrate"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
	"github.com/magicbutton/magic-meetings/database/bun/migrations"
	"github.com/magicbutton/magic-meetings/utils"
)

func RegisterBun() {

	utils.RootCmd.AddCommand(newDBCommand(migrations.Migrations))

}
func OpenDatabase() {
	utils.Setup("./.env")

	dsn := viper.GetString("INFOCAST_DB")
	config, err := pgx.ParseConfig(dsn)
	if err != nil {
		log.Fatal(err)

	}
	config.PreferSimpleProtocol = true
	sqldb := stdlib.OpenDB(*config)
	//sqldb := sql.OpenDB(pgdriver.NewConnector(pgdriver.WithDSN(dsn)))
	utils.Db = bun.NewDB(sqldb, pgdialect.New())

}
func newDBCommand(migrations *migrate.Migrations) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "db",
		Short: "manage database migrations",
		PersistentPreRun: func(cmd *cobra.Command, args []string) {

			OpenDatabase()
		},
		PersistentPostRun: func(cmd *cobra.Command, args []string) {
			utils.Db.Close()
		},
	}

	cmd.AddCommand(&cobra.Command{

		Use:   "init",
		Short: "create migration tables",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()
			migrator := migrate.NewMigrator(utils.Db, migrations)
			migrator.Init(ctx)
		},
	})

	cmd.AddCommand(&cobra.Command{
		Use:   "migrate",
		Short: "migrate database",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()
			migrator := migrate.NewMigrator(utils.Db, migrations)

			group, err := migrator.Migrate(ctx)
			if err != nil {
				log.Fatal(err)
			}

			if group.ID == 0 {
				fmt.Printf("there are no new migrations to run\n")
				return
			}

			fmt.Printf("migrated to %s\n", group)

		},
	})

	cmd.AddCommand(&cobra.Command{
		Use:   "rollback",
		Short: "rollback the last migration group",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)

			group, err := migrator.Rollback(ctx)
			if err != nil {
				log.Fatal(err)
			}

			if group.ID == 0 {
				fmt.Printf("there are no groups to roll back\n")
				return
			}

			fmt.Printf("rolled back %s\n", group)

		},
	})
	cmd.AddCommand(&cobra.Command{
		Use:   "lock",
		Short: "lock migrations",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)
			migrator.Lock(ctx)
		},
	})

	cmd.AddCommand(&cobra.Command{
		Use:   "unlock",
		Short: "unlock migrations",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()
			migrator := migrate.NewMigrator(utils.Db, migrations)
			migrator.Unlock(ctx)
		},
	})

	cmd.AddCommand(&cobra.Command{
		Use:   "create_go",
		Short: "create Go migration",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)

			name := args[0]
			mf, err := migrator.CreateGoMigration(ctx, name)
			if err != nil {
				log.Fatal(err)
			}
			fmt.Printf("created migration %s (%s)\n", mf.Name, mf.Path)

		},
	})

	cmd.AddCommand(&cobra.Command{
		Use:   "create_sql",
		Short: "create up and down SQL migrations",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)

			name := args[0]
			files, err := migrator.CreateSQLMigrations(ctx, name)
			if err != nil {
				log.Fatal(err)
			}

			for _, mf := range files {
				fmt.Printf("created migration %s (%s)\n", mf.Name, mf.Path)
			}

		},
	})
	cmd.AddCommand(&cobra.Command{
		Use:   "status",
		Short: "print migrations status",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)

			ms, err := migrator.MigrationsWithStatus(ctx)
			if err != nil {
				log.Fatal(err)
			}
			fmt.Printf("migrations: %s\n", ms)
			fmt.Printf("unapplied migrations: %s\n", ms.Unapplied())
			fmt.Printf("last migration group: %s\n", ms.LastGroup())

		},
	})
	cmd.AddCommand(&cobra.Command{

		Use:   "mark_applied",
		Short: "mark migrations as applied without actually running them",
		Run: func(cmd *cobra.Command, args []string) {
			ctx := context.Background()

			migrator := migrate.NewMigrator(utils.Db, migrations)

			group, err := migrator.Migrate(ctx, migrate.WithNopMigration())
			if err != nil {
				log.Fatal(err)
			}

			if group.ID == 0 {
				fmt.Printf("there are no new migrations to mark as applied\n")
				return
			}

			fmt.Printf("marked as applied %s\n", group)

		},
	})

	return cmd
}
