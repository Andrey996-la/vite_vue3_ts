import { ApiClientInterface } from '../models'

// import module instances
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the live child clients
export const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}