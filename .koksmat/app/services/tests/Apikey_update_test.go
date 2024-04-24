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
        "github.com/magicbutton/magic-meetings/services/endpoints/apikey"
                    "github.com/magicbutton/magic-meetings/services/models/apikeymodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestApikeyupdate(t *testing.T) {
                                // transformer v1
            object := apikeymodel.Apikey{}
         
            result,err := apikey.ApikeyUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    