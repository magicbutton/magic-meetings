package database

import (
	"time"

	"github.com/uptrace/bun"
)

type User struct {
	bun.BaseModel `bun:"table:users,alias:u"`

	ID             int64     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
	FirstName      string    `bun:"name,notnull"`
	SurName        string    `bun:"surname,notnull"`
	Email          string    `bun:"email,notnull"`
	EmailSelected  bool      `bun:"email_selected,notnull"`
	Mobile         string    `bun:"mobile,notnull"`
	MobileSelected bool      `bun:"mobile_selected,notnull"`
	CompanyName    string    `bun:"company_name,notnull"`
}
