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
        "github.com/magicbutton/magic-meetings/services/endpoints/service"
                    "github.com/magicbutton/magic-meetings/services/models/servicemodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestServiceupdate(t *testing.T) {
                                // transformer v1
            object := servicemodel.Service{}
         
            result,err := service.ServiceUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
