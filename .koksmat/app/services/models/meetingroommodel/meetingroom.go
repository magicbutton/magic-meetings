/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package meetingroommodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
)

func UnmarshalMeetingroom(data []byte) (Meetingroom, error) {
	var r Meetingroom
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Meetingroom) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Meetingroom struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Email string `json:"email"`
    Capacity int `json:"capacity"`
    Features []databasetypes.Page `json:"features"`
    Floor databasetypes.Reference `json:"floor"`

}

