import axios from 'axios'
import { apiUrl } from './apiUrl'
export const dataFn = axios.create({
    baseURL: apiUrl,
    
})