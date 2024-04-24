/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//version: pølsevogn1
package database

import (
	"time"
            "github.com/magicbutton/magic-meetings/database/databasetypes"

	"github.com/uptrace/bun"
)

type Meeting struct {
	bun.BaseModel `bun:"table:meeting,alias:meeting"`

	ID             int     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Start time.Time `json:"start"`
    Duration int `json:"duration"`
    Location string `json:"location"`
    Organizer databasetypes.Reference `json:"organizer"`
    Status string `json:"status"`
    Exchangereference string `json:"exchangereference"`
    Exchangestatus string `json:"exchangestatus"`
    Teamsreference string `json:"teamsreference"`
    Teamsstatus string `json:"teamsstatus"`

}

