/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package meetingmodel
import (
	"encoding/json"
	"time"
)

func UnmarshalMeeting(data []byte) (Meeting, error) {
	var r Meeting
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Meeting) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Meeting struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`

}

