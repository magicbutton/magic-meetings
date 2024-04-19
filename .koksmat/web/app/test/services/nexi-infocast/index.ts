

    
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
  "services": [
    {
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
      ],
      "name": "user"
    },
    {
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
      ],
      "name": "group"
    }
  ],
  "name": "infocast"
}

