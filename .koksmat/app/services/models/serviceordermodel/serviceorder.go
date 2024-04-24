/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package serviceordermodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
)

func UnmarshalServiceorder(data []byte) (Serviceorder, error) {
	var r Serviceorder
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Serviceorder) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Serviceorder struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Deliverydate time.Time `json:"deliverydate"`
    Deliverto databasetypes.Reference `json:"deliverto"`
    Status string `json:"status"`
    Payment databasetypes.Reference `json:"payment"`

}

