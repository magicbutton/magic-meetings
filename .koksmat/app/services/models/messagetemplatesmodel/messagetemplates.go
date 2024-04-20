/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package messagetemplatesmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalMessagetemplates(data []byte) (Messagetemplates, error) {
	var r Messagetemplates
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Messagetemplates) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Messagetemplates struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}
