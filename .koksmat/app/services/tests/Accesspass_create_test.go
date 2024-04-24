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
        "github.com/magicbutton/magic-meetings/services/endpoints/accesspass"
                    "github.com/magicbutton/magic-meetings/services/models/accesspassmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestAccesspasscreate(t *testing.T) {
                                // transformer v1
            object := accesspassmodel.Accesspass{}
         
            result,err := accesspass.AccesspassCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
