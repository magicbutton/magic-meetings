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
        "github.com/magicbutton/magic-meetings/services/endpoints/messagetemplates"
                    "github.com/magicbutton/magic-meetings/services/models/messagetemplatesmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestMessagetemplatesupdate(t *testing.T) {
                                // transformer v1
            object := messagetemplatesmodel.Messagetemplates{}
         
            result,err := messagetemplates.MessagetemplatesUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
