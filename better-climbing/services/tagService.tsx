import http from '../http-common'
import { TagDb, SynonymDb } from '../types/features'

const getAllTags = () => {
  return http.get<Array<TagDb>>(`/tags`)
}

const getTagsSynonyms = () => {
  return http.get<Array<SynonymDb>>(`/tags/synonyms`)
}

const tagService = {
  getAllTags,
  getTagsSynonyms,
}

export default tagService
