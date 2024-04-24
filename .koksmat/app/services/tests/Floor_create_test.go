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
        "github.com/magicbutton/magic-meetings/services/endpoints/floor"
                    "github.com/magicbutton/magic-meetings/services/models/floormodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestFloorcreate(t *testing.T) {
                                // transformer v1
            object := floormodel.Floor{}
         
            result,err := floor.FloorCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
