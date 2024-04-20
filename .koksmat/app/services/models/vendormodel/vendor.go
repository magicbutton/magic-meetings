/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package vendormodel
import (
	"encoding/json"
	"time"
)

func UnmarshalVendor(data []byte) (Vendor, error) {
	var r Vendor
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Vendor) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Vendor struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

