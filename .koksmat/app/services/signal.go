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
    "github.com/magicbutton/magic-meetings/services/endpoints/signal"
    "github.com/magicbutton/magic-meetings/services/models/signalmodel"

	. "github.com/magicbutton/magic-meetings/utils"
	"github.com/nats-io/nats.go/micro"
)

func HandleSignalRequests(req micro.Request) {

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


    
    result,err := signal.SignalRead(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling SignalRead")
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
            object := signalmodel.Signal{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling signal")
                return
            }
                     
    result,err := signal.SignalCreate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling SignalCreate")
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
            object := signalmodel.Signal{}
            err := json.Unmarshal([]byte(payload.Args[1]), &object)
            if err != nil {
                log.Println("Error", err)
                ServiceResponseError(req, "Error unmarshalling signal")
                return
            }
                     
    result,err := signal.SignalUpdate(object)
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling SignalUpdate")
        return
    }

    ServiceResponse(req, result)

case "delete":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


            err :=  signal.SignalDelete(payload.Args[1])
            if (err != nil) {
                log.Println("Error", err)
                ServiceResponseError(req, "Error calling SignalDelete")
                return
            }
            ServiceResponse(req, "")

case "search":
if (len(payload.Args) < 2) {
    log.Println("Expected 2 arguments, got %d", len(payload.Args))
    ServiceResponseError(req, "Expected 1 arguments")
    return
}


    
    result,err := signal.SignalSearch(payload.Args[1])
    if (err != nil) {
        log.Println("Error", err)
        ServiceResponseError(req, "Error calling SignalSearch")
        return
    }

    ServiceResponse(req, result)

default:
ServiceResponseError(req, "Unknown command")
}
}
