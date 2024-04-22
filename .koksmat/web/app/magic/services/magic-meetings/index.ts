

    
export interface EndPoint {
    name: string;

}

export interface Service {
    name: string;

    endpoints: EndPoint[]
}

export interface AppMap {
    name: string;

    services: Service[]
}
export const pagemap : AppMap = {
  "name": "magic-meetings",
  "services": [
    {
      "name": "tenant",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "user",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "meeting",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "service",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "servicecatalogue",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "vendor",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "servicecategory",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "serviceorder",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "task",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "productionorder",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "account",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "building",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "site",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "country",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "floor",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "meetingroom",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "communicationchannel",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "messagetemplates",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "signal",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "messagelog",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "auditlog",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "visitor",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "accesspass",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "accesspoint",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    },
    {
      "name": "apikey",
      "endpoints": [
        {
          "name": "read"
        },
        {
          "name": "create"
        },
        {
          "name": "update"
        },
        {
          "name": "delete"
        },
        {
          "name": "search"
        }
      ]
    }
  ]
}

