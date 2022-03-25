import axios from "axios";

//axios  request interceptors

axios.interceptors.request.use(
  (req) => {
    req.headers.authorization = "my secret token";
    console.log(`request sending : ${req.method} ${req.url}`);
    return req;
  },
  //error handling  at request
  (err) => {
    console.log("error log at request  ", err);
    throw err;
  }
);

//axios response interceptor
axios.interceptors.response.use(
  (res) => {
    console.log("response using axios is succesfull with status: ", res.status);

    // Important: response interceptors **must** return the response.
    return res;
  },
  //error handling  at response
  (err) => {
    console.log("response using axios is failed with error : ", err);
    throw err;
  }
);

export const getData = async () => {
  const data = await axios.get("hps://jsonplaceholder.typicode.com/todos");
  return data;
};

export const setData = async () => {
  const data = await axios.post("https://httpbin.org/post", { answer: 42 });
  return data;
};

// getData();
// setData();
