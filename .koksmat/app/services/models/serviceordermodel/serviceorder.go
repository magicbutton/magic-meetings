/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package serviceordermodel
import (
	"encoding/json"
	"time"
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
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

