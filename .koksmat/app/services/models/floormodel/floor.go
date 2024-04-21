/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package floormodel
import (
	"encoding/json"
	"time"
    
)

func UnmarshalFloor(data []byte) (Floor, error) {
	var r Floor
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Floor) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Floor struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`

}

