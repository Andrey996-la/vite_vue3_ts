import { 
  ItemsApiClientOptions,
  ItemsApiClientInterface, 
  ItemsApiClientModel
} from '../../models/items'


const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/path/to/your/real/api/end-point'
  }
}

export const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)