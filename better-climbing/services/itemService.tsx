import http from '../http-common'
import { ItemDb } from '../types/features'

const getAllItems = () => {
  return http.get<Array<ItemDb>>(`/items`)
}

const getAllItemsForCoach = (coachId: number) => {
  return http.get<Array<ItemDb>>(`/items/${coachId}`)
}

const itemsService = {
  getAllItems,
  getAllItemsForCoach,
}

export default itemsService
