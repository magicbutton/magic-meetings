/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package accesspassmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalAccesspass(data []byte) (Accesspass, error) {
	var r Accesspass
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Accesspass) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Accesspass struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}
