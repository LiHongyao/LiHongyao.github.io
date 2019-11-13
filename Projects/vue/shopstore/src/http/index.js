import Axios from 'axios';

// axios 
// => http://192.168.31.212:8888 
// => http://10.2.1.2:8888
Axios.defaults.baseURL = "http://10.2.1.2:8888";

export default Axios;