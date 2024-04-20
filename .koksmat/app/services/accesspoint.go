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
    "github.com/magicbutton/magic-meetings/services/endpoints/accesspoint"
    "github.com/magicbutton/magic-meetings/services/models/accesspointmodel"

	. "github.com/magicbutton/magic-meetings/utils"
	"github.com/nats-io/nats.go/micro"
)

func HandleAccesspointRequests(req micro.Request) {

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


    
    result,err := accesspoint.AccesspointRead(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspointRead")
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
            object := accesspointmodel.Accesspoint{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling accesspoint")
                return
            }
                     
    result,err := accesspoint.AccesspointCreate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspointCreate")
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
            object := accesspointmodel.Accesspoint{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling accesspoint")
                return
            }
                     
    result,err := accesspoint.AccesspointUpdate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspointUpdate")
        return
    }

    ServiceResponse(req, result)

case "delete":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


            err :=  accesspoint.AccesspointDelete(payload.Args[1])
            if (err != nil) {
                log.Println("Error", err)
                ServiceResponseError(req, "Error calling AccesspointDelete")
                return
            }
            ServiceResponse(req, "")

case "search":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


    
    result,err := accesspoint.AccesspointSearch(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling AccesspointSearch")
        return
    }

    ServiceResponse(req, result)

default:
ServiceResponseError(req, "Unknown command")
}
}
