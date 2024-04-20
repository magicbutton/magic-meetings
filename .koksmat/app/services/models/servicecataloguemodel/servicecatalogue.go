/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package servicecataloguemodel
import (
	"encoding/json"
	"time"
)

func UnmarshalServicecatalogue(data []byte) (Servicecatalogue, error) {
	var r Servicecatalogue
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Servicecatalogue) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Servicecatalogue struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

