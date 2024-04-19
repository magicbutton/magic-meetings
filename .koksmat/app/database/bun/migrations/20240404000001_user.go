package migrations

import (
	"context"
	"fmt"

	"github.com/365admin/magic-meetings/database"
	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		//		db.RegisterModel((*database.User)(nil))
		db.NewCreateTable().Model((*database.User)(nil)).Exec(ctx)
		db.NewCreateIndex().
			Model((*database.User)(nil)).
			Index("user_email_idx").
			Unique().
			Column("email").
			Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		return nil
	})
}
