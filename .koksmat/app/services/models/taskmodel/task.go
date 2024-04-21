/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package taskmodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-meetings/database/databasetypes"
)

func UnmarshalTask(data []byte) (Task, error) {
	var r Task
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Task) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Task struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Start time.Time `json:"start"`
    End time.Time `json:"end"`
    Location databasetypes.Reference `json:"location"`

}

