package migrations

import (
	"context"
	"fmt"

	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		// db.RegisterModel((*database.Group)(nil))
		// db.RegisterModel((*database.User)(nil))
		//db.RegisterModel((*database.UserGroupMembership)(nil))
		//db.NewCreateTable().Model((*database.UserGroupMembership)(nil)).Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		return nil
	})
}
