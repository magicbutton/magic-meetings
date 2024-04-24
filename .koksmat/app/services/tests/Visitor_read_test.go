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
        "github.com/magicbutton/magic-meetings/services/endpoints/visitor"
        
        "github.com/stretchr/testify/assert"
    )
    
    func TestVisitorread(t *testing.T) {
                    
            result,err := visitor.VisitorRead(".")
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
