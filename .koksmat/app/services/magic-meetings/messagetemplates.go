/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package magic-meetings
import (
	"encoding/json"
	"log"
    "github.com/magicbutton/magic-meetings/services/magic-meetings/endpoints/messagetemplates"
    "github.com/magicbutton/magic-meetings/services/magic-meetings/models/messagetemplatesmodel"

	. "github.com/magicbutton/magic-meetings/utils"
	"github.com/nats-io/nats.go/micro"
)

func HandleMessagetemplatesRequests(req micro.Request) {

    rawRequest := string(req.Data())
	if rawRequest == "ping" {
		req.Respond([]byte("pong"))
		return

	}

var payload ServiceRequest
_ = json.Unmarshal([]byte(req.Data()), &payload)
if len(payload.Args) < 1 {
    ServiceResponseError(req, "missing command")
    return

}
switch payload.Args[0] {


case "read":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


    
    result,err := messagetemplates.MessagetemplatesRead(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling MessagetemplatesRead")
        return
    }

    ServiceResponse(req, result)

case "create":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


                // transformer v1
            object := messagetemplatesmodel.Messagetemplates{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling messagetemplates")
                return
            }
                     
    result,err := messagetemplates.MessagetemplatesCreate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling MessagetemplatesCreate")
        return
    }

    ServiceResponse(req, result)

case "update":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


                // transformer v1
            object := messagetemplatesmodel.Messagetemplates{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling messagetemplates")
                return
            }
                     
    result,err := messagetemplates.MessagetemplatesUpdate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling MessagetemplatesUpdate")
        return
    }

    ServiceResponse(req, result)

case "delete":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


            err :=  messagetemplates.MessagetemplatesDelete(payload.Args[1])
            if (err != nil) {
                log.Println("Error", err)
                ServiceResponseError(req, "Error calling MessagetemplatesDelete")
                return
            }
            ServiceResponse(req, "")

case "search":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


    
    result,err := messagetemplates.MessagetemplatesSearch(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling MessagetemplatesSearch")
        return
    }

    ServiceResponse(req, result)

default:
ServiceResponseError(req, "Unknown command")
}
}