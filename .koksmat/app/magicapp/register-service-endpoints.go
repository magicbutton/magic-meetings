/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
package magicapp

import (
	"github.com/magicbutton/magic-meetings/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
    root.AddEndpoint("user", micro.HandlerFunc(services.HandleUserRequests))
        root.AddEndpoint("meeting", micro.HandlerFunc(services.HandleMeetingRequests))
        root.AddEndpoint("serviceorder", micro.HandlerFunc(services.HandleMeetingRequests))
        root.AddEndpoint("service", micro.HandlerFunc(services.HandleServiceRequests))
        root.AddEndpoint("servicecatalogue", micro.HandlerFunc(services.HandleServicecatalogueRequests))
        root.AddEndpoint("vendor", micro.HandlerFunc(services.HandleVendorRequests))
        root.AddEndpoint("servicecategory", micro.HandlerFunc(services.HandleServicecategoryRequests))
        root.AddEndpoint("serviceorder", micro.HandlerFunc(services.HandleServiceorderRequests))
        root.AddEndpoint("task", micro.HandlerFunc(services.HandleTaskRequests))
        root.AddEndpoint("productionorder", micro.HandlerFunc(services.HandleProductionorderRequests))
        root.AddEndpoint("account", micro.HandlerFunc(services.HandleAccountRequests))
        root.AddEndpoint("building", micro.HandlerFunc(services.HandleBuildingRequests))
        root.AddEndpoint("site", micro.HandlerFunc(services.HandleSiteRequests))
        root.AddEndpoint("country", micro.HandlerFunc(services.HandleCountryRequests))
        root.AddEndpoint("floor", micro.HandlerFunc(services.HandleFloorRequests))
        root.AddEndpoint("meetingroom", micro.HandlerFunc(services.HandleMeetingroomRequests))
        root.AddEndpoint("communicationchannel", micro.HandlerFunc(services.HandleCommunicationchannelRequests))
        root.AddEndpoint("messagetemplates", micro.HandlerFunc(services.HandleMessagetemplatesRequests))
        root.AddEndpoint("signal", micro.HandlerFunc(services.HandleSignalRequests))
        root.AddEndpoint("messagelog", micro.HandlerFunc(services.HandleMessagelogRequests))
        root.AddEndpoint("auditlog", micro.HandlerFunc(services.HandleAuditlogRequests))
        root.AddEndpoint("visitor", micro.HandlerFunc(services.HandleVisitorRequests))
        root.AddEndpoint("accesspass", micro.HandlerFunc(services.HandleAccesspassRequests))
        root.AddEndpoint("accesspoint", micro.HandlerFunc(services.HandleAccesspointRequests))
        root.AddEndpoint("apikey", micro.HandlerFunc(services.HandleApikeyRequests))
    }
