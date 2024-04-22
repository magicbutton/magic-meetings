package magicapp

import (
	"log"

	"github.com/magicbutton/magic-meetings/utils"
	"github.com/spf13/viper"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/pgdialect"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
)

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
