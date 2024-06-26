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
        "github.com/magicbutton/magic-meetings/services/endpoints/messagelog"
                    "github.com/magicbutton/magic-meetings/services/models/messagelogmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestMessagelogupdate(t *testing.T) {
                                // transformer v1
            object := messagelogmodel.Messagelog{}
         
            result,err := messagelog.MessagelogUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
