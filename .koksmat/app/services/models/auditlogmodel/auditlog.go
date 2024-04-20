/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package auditlogmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalAuditlog(data []byte) (Auditlog, error) {
	var r Auditlog
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Auditlog) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Auditlog struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

