/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
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
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Address string `json:"address"`

}

