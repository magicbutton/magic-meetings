/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package communicationchannelmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalCommunicationchannel(data []byte) (Communicationchannel, error) {
	var r Communicationchannel
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Communicationchannel) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Communicationchannel struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

