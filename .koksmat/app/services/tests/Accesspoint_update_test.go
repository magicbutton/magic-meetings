    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/magicbutton/magic-meetings/services/endpoints/accesspoint"
                    "github.com/magicbutton/magic-meetings/services/models/accesspointmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestAccesspointupdate(t *testing.T) {
                                // transformer v1
            object := accesspointmodel.Accesspoint{}
         
            result,err := accesspoint.AccesspointUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
