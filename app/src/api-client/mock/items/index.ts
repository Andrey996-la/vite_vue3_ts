import {
  ItemsApiClientOptions,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from '../../models/items'


const options: ItemsApiClientOptions = { 
  endpoints: {
    fetchItems: '/static/mock-data/items/items.json'
  },
  mockDelay: 1000
}

export const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)