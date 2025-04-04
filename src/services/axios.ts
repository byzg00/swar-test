import axios, { AxiosRequestConfig } from 'axios'

const axiosClientConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:4000',
  responseType: 'json',
}

export const backendClient = axios.create(axiosClientConfig)

export const backendPath = 'https://support.swarmica.com/'
