/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package migrations

import (
	"context"
	"fmt"

	"github.com/magicbutton/magic-meetings/database"
	"github.com/uptrace/bun"
)

func init() {
	Migrations.MustRegister(func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [up migration] ")
		db.RegisterModel((*database.Messagetemplates)(nil))
		db.NewCreateTable().Model((*database.Messagetemplates)(nil)).Exec(ctx)
		return nil
	}, func(ctx context.Context, db *bun.DB) error {
		fmt.Print(" [down migration] ")
		return nil
	})
}

