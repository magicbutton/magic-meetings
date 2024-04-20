/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package productionordermodel
import (
	"encoding/json"
	"time"
)

func UnmarshalProductionorder(data []byte) (Productionorder, error) {
	var r Productionorder
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Productionorder) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Productionorder struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

