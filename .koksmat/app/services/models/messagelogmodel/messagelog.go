/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package messagelogmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalMessagelog(data []byte) (Messagelog, error) {
	var r Messagelog
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Messagelog) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Messagelog struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

