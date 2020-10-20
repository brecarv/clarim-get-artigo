import axios from 'axios';

export default axios.create({
  baseURL: `https://clarimdiario.herokuapp.com/api/`
});