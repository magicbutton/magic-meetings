/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package visitormodel
import (
	"encoding/json"
	"time"
)

func UnmarshalVisitor(data []byte) (Visitor, error) {
	var r Visitor
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Visitor) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Visitor struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

