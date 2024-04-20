/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package apikeymodel
import (
	"encoding/json"
	"time"
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
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

