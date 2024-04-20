/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package taskmodel
import (
	"encoding/json"
	"time"
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

}
