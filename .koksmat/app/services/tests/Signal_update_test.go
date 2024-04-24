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
        "github.com/magicbutton/magic-meetings/services/endpoints/signal"
                    "github.com/magicbutton/magic-meetings/services/models/signalmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestSignalupdate(t *testing.T) {
                                // transformer v1
            object := signalmodel.Signal{}
         
            result,err := signal.SignalUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
