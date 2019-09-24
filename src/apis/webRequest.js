import axios from 'axios';

export default axios.create({
    baseURL: 'http://10.87.32.165:9530/api/v1/',
    headers: {
    'Content-Type': 'application/json',
  }
});