import axios from 'axios'
import config from '@/config.ts'

export const client = axios.create({
  baseURL : config.apiUrl,
  timeout : 30000,
})
