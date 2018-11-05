import axios from 'axios';

const url = 'http://www.randomtext.me/api/';

export function GetRequest() {
  return axios.get(url);
}

// export function PostRequest(endPoint, data) {
//   return axios.post(`${url}${endPoint}`, data)
// }
//
// export function PutRequest(endPoint, data) {
//   return axios.put(`${url}${endPoint}`, data)
// }
//
// export function DeleteRequest(endPoint, data) {
//   return axios.delete(`${url}${endPoint}`, { data: data })
// }
