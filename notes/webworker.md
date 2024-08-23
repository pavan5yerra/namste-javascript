



Web Workers are a feature of modern web browsers that allow you to run scripts in background threads, independent of the main thread that handles the user interface. This can be useful for running tasks that are computationally expensive or time-consuming, without freezing or slowing down the main thread, which is responsible for rendering the UI and handling user interactions.

Here are the key aspects of Web Workers:

1. **Background Processing:** Web Workers run tasks in the background. They operate outside the main thread, so they don't block or slow down the user interface.
2. **Types of Web Workers:**
    - **Dedicated Web Workers:** These are used by a single script and are the most common type.
    - **Shared Web Workers:** These can be accessed by multiple scripts, even from different browser tabs, but are less commonly used.
    - **Service Workers:** These act as a proxy between your web app and the network, handling things like caching and background sync.
3. **Communication:** Web Workers communicate with the main thread using messages. This communication is done asynchronously through the `postMessage`  and `onmessage`  methods.
4. **Use Cases:**
    - Heavy computations or data processing (e.g., image manipulation, data parsing)
    - Handling real-time data like web socket streams
    - Performing tasks like encryption or compression without blocking the UI
5. **Limitations:**
    - Web Workers do not have access to the DOM (Document Object Model), which means they cannot directly manipulate HTML or interact with the UI.
    - They have limited access to certain APIs, but they can use features like `XMLHttpRequest` , `fetch` , and `IndexedDB` .
Overall, Web Workers are a powerful way to improve performance by offloading heavy work from the main thread. While JavaScript itself is single-threaded, the browser environment supports multi-threading using Web Workers. This allows you to offload heavy processing to background threads while keeping the main thread responsive for handling UI updates and interactions.





```javascript
<html>
<head>
    <script src="./script.js"> </script>
</head>
<body>
  <button id="cbutton" onclick = {handleColor}> changeBackground</button>
  <button id="sumbutton" onclick = {handleSum}}> Sum Operation</button>
</body>
</html>
```
``` javascript
//script.js

// creating web worker

const worker = new worker("./worker.js")
// Accessing DOM elements
const cbutton = document.getElementById("cbutton");
const sumbutton = document.getElementById("sumbutton");

const handleColor = () => {
     cbutton.style.backgroundColor =  
     cbutton.style.backgroundColor== 'red' ? 'green : 'red';
}

/*
  As this code run on javscript single threaded languge , It will block
  main thread for some time. 

  So in this process when use tries to click backgoroung color change buttuon
  it wont happen.
  
  To solve this problem we use web wrokers.
  
 */
const hanldeSum = () => {
   
   /* let sum=0;
   for(let i=0 ; i<100000000 ; i++){
         sum+=1;
  }
  alert("sum is :" + sum);
  */
  
   worker.postmessage("hello web worker");
   
}


// For capturing the message from web worker

worker.onmessage = (message) => {
   alert("sum" , message)
}


```


```javascript
// worker.js

/*
Worker give two methods two communicate 
onMessage  , postMessage , these available in global object
OnMessage  is a listener method
postMessage is a event emitter
*/

onmessage = () => {
  let sum=0;
   for(let i=0 ; i<100000000 ; i++){
         sum+=1;
  }
  alert("sum is :" + sum);
  postmessage(sum);
  
}

```


