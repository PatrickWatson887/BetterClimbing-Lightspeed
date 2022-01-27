import http from '../http-common'
import { CoachDb } from '../types/features'

const getAllWithTags = () => {
  return http.get<Array<CoachDb>>('/coach/getAllWithTags')
}

const getFeatured = () => {
  return http.get<Array<CoachDb>>('/coach/featured')
}

const coachService = {
  getAllWithTags,
  getFeatured,
}

export default coachService
