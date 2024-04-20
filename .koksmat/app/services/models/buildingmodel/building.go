/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package buildingmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalBuilding(data []byte) (Building, error) {
	var r Building
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Building) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Building struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

