import axios from 'axios';

export default function getRequest(url) {
  var data = axios(url, {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  })
    .then(res => res.data.data)
    .catch(err => console.error(err));
  return data;
};