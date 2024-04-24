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
        "github.com/magicbutton/magic-meetings/services/endpoints/site"
                    "github.com/magicbutton/magic-meetings/services/models/sitemodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestSiteupdate(t *testing.T) {
                                // transformer v1
            object := sitemodel.Site{}
         
            result,err := site.SiteUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
