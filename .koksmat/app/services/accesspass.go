/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
package services
import (
	"encoding/json"
	"log"
    "github.com/magicbutton/magic-meetings/services/endpoints/accesspass"
    "github.com/magicbutton/magic-meetings/services/models/accesspassmodel"

	. "github.com/magicbutton/magic-meetings/utils"
	"github.com/nats-io/nats.go/micro"
)

func HandleAccesspassRequests(req micro.Request) {

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


    
    result,err := accesspass.AccesspassRead(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspassRead")
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
            object := accesspassmodel.Accesspass{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling accesspass")
                return
            }
                     
    result,err := accesspass.AccesspassCreate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspassCreate")
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
            object := accesspassmodel.Accesspass{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling accesspass")
                return
            }
                     
    result,err := accesspass.AccesspassUpdate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspassUpdate")
        return
    }

    ServiceResponse(req, result)

case "delete":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


            err :=  accesspass.AccesspassDelete(payload.Args[1])
            if (err != nil) {
                log.Println("Error", err)
                ServiceResponseError(req, "Error calling AccesspassDelete")
                return
            }
            ServiceResponse(req, "")

case "search":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


    
    result,err := accesspass.AccesspassSearch(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspassSearch")
        return
    }

    ServiceResponse(req, result)

default:
ServiceResponseError(req, "Unknown command")
}
}
