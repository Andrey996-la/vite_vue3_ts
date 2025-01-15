import type { ItemInterface } from "../../../models/items/Item.interface";

/**
 * @name ItemsStateInterface
 * @description Interface represents the Items state
 */

export interface ItemsStateInterface { 
  loading: boolean
  items: ItemInterface[]
}