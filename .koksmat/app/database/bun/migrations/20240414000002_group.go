package migrations

import (
	"context"
	"fmt"

	"github.com/365admin/nexi-infocast/database"
	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		db.RegisterModel((*database.Group)(nil))
		db.NewCreateTable().Model((*database.Group)(nil)).Exec(ctx)
		db.NewCreateIndex().
			Model((*database.Group)(nil)).
			Index("group_segment_idx").
			Column("group_segment").
			Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		return nil
	})
}
