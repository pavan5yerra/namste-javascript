import * as fetchIntercept from "fetch-intercept";

const unregister = fetchIntercept.register({
  request: function (url, config) {
    const modifiedUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    console.log("request is sending using fetch", modifiedUrl);
    return [modifiedUrl, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    const clonedResponse = response.clone();
    const json = () =>
      clonedResponse
        .json()
        .then((data) => ({ ...data, title: `Intercepted: ${data.title}` }));

    response.json = json;
    console.log("response data using fetch ", response);
    return response;
  },

  responseError: function (error) {
    return Promise.reject(error);
  }
});

export const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const setData = () => {
  fetch("https://httpbin.org/post", {
    method: "POST"
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// getData();
// setData();
// unregister interceptors
unregister();
