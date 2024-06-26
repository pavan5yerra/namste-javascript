# Differnce between ES5 & ES6
  ***PLEASE read the link : https://medium.com/sliit-foss/es5-vs-es6-in-javascript-cb10f5fd600c***


***Destructing Nested Objects***
```javascript
 const user = {
   name: 'John Doe',
   address: {
     street: '123 Main St',
     city: 'Anytown',
     country: 'USA'
   }
 };
 
 const { address: { street, city, country } } = user;
 console.log(street); // '123 Main St'
 console.log(city); // 'Anytown'
 console.log(country); // 'USA'
```


***map vs forEach***

***ForEach***
  - Purpose: The forEach method is used to execute a provided function once for each array element.
  - Return Value: forEach does not return anything; it returns undefined.
  - Mutation: It is typically used for side effects such as modifying the array or working with each element individually.
    
```javascript
 const numbers = [1, 2, 3, 4];
 numbers.forEach((num, index, arr) => {
     arr[index] = num * 2;
 });
 console.log(numbers);
 // Output: [2, 4, 6, 8]


const urls = ['url1', 'url2', 'url3'];
urls.forEach(url => {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});


```

***map***

  - Purpose: The map method is used to create a new array with the results of calling a provided function on every element in the array.
  - Return Value: map returns a new array containing the results of applying the provided function to each element.
  - Mutation: It does not mutate the original array; it produces a new array.

```javascript
 const numbers = [1, 2, 3];
 const doubled = numbers.map(num => num * 2);
 console.log(doubled);
 // Output: [2, 4, 6]
```



# Hoc

>-  ***A Function which takes another function as an argument and return a function is Higher Order Function***

```javascript
        const radius =[3,1,2,4];

        const area = (radius) => Math.PI * radius * radius;

        const circumference = (radius) => 2*Math.PI*radius;

        const diameter = (radius) => 2*radius;

        const  calculateLogic = (radius,logic) => {
            const output=[];
            for(let i=0 ; i<radius.length ; i++){
                output.push(logic(radius[i]));
            }

            return output;
        }

        console.log(calculateLogic(radius,area));
        console.log(calculateLogic(radius,circumference));
        console.log(calculateLogic(radius,diameter));
```


# Event Bubbling & Capturing

![eventphase](./assests/eventphase.png)

>- ***Events are generally processed in three phases - capturing , target , bubbling***
>- ***Capturing phase : This phase trickles down from the top of the DOM tree to the target element.***
>- ***Target Phase : This phase is basically the end of the capturing and the beginning of the bubbling phase***
>- ***Bubbling Phase : The bubbling phase, which is the last phase, is the reverse of the capturing phase.In this phase, the event bubbles up the target element through its parent element, the ancestor, to the global window object.***
>- ***By default all event you add will be attaches to bubbling phase only***
>- ***addEventListener takes three arguments event name , callback function and iscapture(optional)***
>- ***Bydefault the addEvenListener function attaches every event in bubble phase and no need passing isCapture options***
>- ***If you want to captur events in capture phase you need pass isCapture argument as true***

```javascript
            <!DOCTYPE html>
                <head>
                <title>Akshay Saini</title>

                <style>
                div {
                    min-width: 100px;
                    min-height: 100px;
                    padding: 30px;
                    border: 1px solid black;
                }
                </style>
                </head>
                <body>

                <div id="grandparent">
                    <div id="parent">
                    <div id="child"></div>
                    </div>
                </div>

                <script src="./js/index.js"></script>
                </body>
            </html>

            document.querySelector("#grandparent")
            .addEventListener('click', (e) => {
                console.log("Grandparent Clicked!");
                //e.stopPropagation();
            }, true);               // Is capture phase enable

            document.querySelector("#parent")
            .addEventListener('click', (e) => {
                console.log("Parent Clicked!");
            }, true);               // Is capture phase enable

            document.querySelector("#child")
            .addEventListener('click', (e) => {
                console.log("Child Clicked!");
            }, true);               // Is capture phase enable

```

# Event Delegation 
>- ***It is a technique od handling event in a webpage in a better way***
>- ***This is only possible only because event propagate throught out the hierarchy***

>- ***Lte say in amazon  site you can see lot of product display in card formats .do you think event is attached to each and every product card***
>- ***No it will cause of lot of perfomance issue and events are heavy***
>- ***So we take advantage of event propagation and use it to our cause***
>- ***[code example](https://codepen.io/akshaymarch7/pen/omOevJ)

```javascript
            <!DOCTYPE html>
                <head>
                <title>Akshay Saini</title>
                </head>
                <body>

                <div>
                    <ul id="category">
                        <li id="laptops">laptops</li>
                        <li id="cameras">cameras</li>
                        <li id="shoes">shoes</li>
                    </ul>
                </div>

                <script src="./js/index.js"></script>
                </body>
            </html>

            <!-- Here we have attached at event to parent of list of card instead of each card and capturing event in the parents -->
            document.querySelector("#category").addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.tagName == 'LI') {
                window.location.href = "/" + e.target.id;
            }
            });
```
# Debounce

>- ***It is mainly used for performance optimization when user interacting with the applications***

>- ***Amazon has search bar to find its products if you observe the it wont give suggestion on keypress***
>- ***It will only fire event whenever you stop for sometime***
>- ***let say if type computer in search bar , it wont fire event for 8 times , it maybe fire for 2 event based on ur typing speed***
>- ***Due to this it control the api hits  and will decrease the load on API***

```javascript
                    // So whenever you type input the event will fire only after 300 milli second 
                    let counter = 0;
                    const getData = () => {
                    // calls an API and gets Data
                    console.log("Fetching Data ..", counter++);
                    }

                    function debounce(func, delay) {
                          let timer;
                          return () => {
                            clearTimeout(timer);
                            timer = setTimeout(func, delay);
                          };
                        }
                  }

                    const betterFunction = debounce(getData, 300);

                <input type="text" onkeyup= betterFunction() />
```

# Throttling
>- ***Throttling means controlling the speed of firing events***

>- ***It means let say you have set throttle for 500 millisecond on click event for button***
>- ***How many time you click the button it will only fire one event in that 500 millisecond window***


```javascript
                const loggerFunc = () => {
                console.count("Throttled Function");
                }

              function throttling(func, delay) {
                  let flag = true;
                  return () => {
                    if (flag) {
                      func();
                      setTimeout(() => (flag = true), delay);
                      flag = false;
                    }
                  };
                }

                const betterLoggerFunction = throttling(loggerFunc, 1000);

                window.addEventListener("resize",betterLoggerFunction);

                // This is the normal Function without Throttling
                //Check the console for the difference between the calls of Normal Function and the Throttled Function 
                
                const normalFunc = () => {
                console.count("Normal Function");
                }

                window.addEventListener("resize",normalFunc);
```

***SetInterval vs SetTimeout***

```javascript
   let intervalID = setInterval(() => {
       console.log('This runs every 3 seconds');
   }, 3000);
   
   // To cancel the interval
   clearInterval(intervalID);
   
   
   
   let intervalID = setInterval(() => {
       console.log('This runs every 3 seconds');
   }, 3000);
   
   // To cancel the interval
   clearInterval(intervalID);
```

- setTimeout: Executes a function once after a specified delay(It might have some delays)
- setInterval: Executes a function repeatedly at specified intervals.
- setTimeout: Useful for delaying a single operation, such as displaying a message after a delay or performing an action after some time.
- setInterval: Useful for repeatedly performing an action at regular intervals, such as updating a clock, polling a server, or performing animations.
- Both functions can be canceled using their respective IDs with clearTimeout and clearInterval.
