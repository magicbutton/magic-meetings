/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package accountmodel
import (
	"encoding/json"
	"time"
    
)

func UnmarshalAccount(data []byte) (Account, error) {
	var r Account
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Account) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Account struct {
    ID        string    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Balance int `json:"balance"`
    Currency string `json:"currency"`
    Status string `json:"status"`

}

