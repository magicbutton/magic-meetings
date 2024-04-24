/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package apikeymodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
)

func UnmarshalApikey(data []byte) (Apikey, error) {
	var r Apikey
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Apikey) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Apikey struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Key string `json:"key"`
    User databasetypes.Reference `json:"user"`
    Validto time.Time `json:"validto"`

}

