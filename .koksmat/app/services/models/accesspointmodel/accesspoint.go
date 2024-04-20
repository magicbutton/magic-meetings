/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package accesspointmodel
import (
	"encoding/json"
	"time"
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

}

