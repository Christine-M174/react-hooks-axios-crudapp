import axios from "axios";

// Note(2):: Axios. create is a handy feature within Axios used to create a new instance with a custom configuration.
// Note(3):: Axios (a promise-based HTTP client) Fetch API (a browser in-built web API).
export default axios.create({
  baseURL: "http://localhost:8080/api",  // Note(4) :: that is the backend url , will fetch data from it 
  headers: {
    "Content-type": "application/json"
  }
});
