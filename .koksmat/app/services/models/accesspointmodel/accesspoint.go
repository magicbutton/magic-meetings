/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package accesspointmodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
)

func UnmarshalAccesspoint(data []byte) (Accesspoint, error) {
	var r Accesspoint
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Accesspoint) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Accesspoint struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Location databasetypes.Reference `json:"location"`
    Status string `json:"status"`

}

