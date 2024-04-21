/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package meetingmodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
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
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Start time.Time `json:"start"`
    End time.Time `json:"end"`
    Location databasetypes.Reference `json:"location"`
    Organizer databasetypes.Reference `json:"organizer"`
    Participants []databasetypes.Page `json:"participants"`
    Guests []databasetypes.Page `json:"guests"`
    Viewers []databasetypes.Page `json:"viewers"`
    Presenters []databasetypes.Page `json:"presenters"`
    Hosts []databasetypes.Page `json:"hosts"`
    Status string `json:"status"`
    Serviceorders []databasetypes.Page `json:"serviceorders"`
    Exchangereference string `json:"exchangereference"`
    Exchangestatus string `json:"exchangestatus"`
    Teamsreference string `json:"teamsreference"`
    Teamsstatus string `json:"teamsstatus"`

}

