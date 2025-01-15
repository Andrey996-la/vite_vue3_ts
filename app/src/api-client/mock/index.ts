import { ApiClientInterface } from '../models/ApiClient.interface'
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the mock child clients

export const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}