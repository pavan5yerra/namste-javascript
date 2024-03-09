# Basics

>- ***[Execution context & call stack](https://www.youtube.com/watch?v=iLWTnMzWtj4)***
>- ***[Hositing](https://www.youtube.com/watch?v=Fnlnw8uY6jo)***
>- ***[How function work in JS](https://www.youtube.com/watch?v=gSDncyuGw0s)***
>- ***[scope chain & lexical enviroment](https://www.youtube.com/watch?v=uH-tVP8MUs8)***
>- ***[Let & const](https://www.youtube.com/watch?v=BNC6slYCj50)***
>- ***[Prototype](https://www.youtube.com/watch?v=wstwjQ1yqWQ)***
>- ***[callback function](https://www.youtube.com/watch?v=btj35dh3_U8)***
>- ***[Event loop](https://www.youtube.com/watch?v=8zKuNo4ay8E)***

# undefined & not defined
>- ***javascript engine will skim through entire code even before execution and allocation memeory to vairable with value undefined***
>- ***javascript is loosely typed language, it means let say u have a varibale x of type string , you can replace it with number or anything***

                    console.log(x) // Reference  error x is not defined
                    let x;
                    console.log(x)  // undefined

# Block scope

***What is block**
>- ***Block is defined by {} , this allows javascript to group statements***
>- ***if(true) console.log("hello") --> if condition is true it can only execute single statement***
>- ***What if to execute multiple statements , yes we use blocks***

                            if(true){
                                console.log("hello1);
                                console.log("hello2);
                                .
                                .
                                .
                            }

***What all variables we can access inside this block***
>- ***In the below example let & const are stored in block scope and var is store in global scope***
>- ***console statement outside block cant access b and c values because , there were declared in block***
>- ***But var a is accessible out the block, thats the reasons , let and const are block scope***

            {
                var a =10;
                let b=20;
                const c=30;
                console.log(a);
                console.log(b);
                console.log(c);
            }
                console.log(a);
                console.log(b);
                console.log(c);
    
     //output will  be it will print  10,20,30,10  and then throws refernce Error : b is not defined

***What is shadowing***

>- ***variable a outside the block and inside the block both are referenced to global scope thats why value of replaced inside the block***
>- ***But when coming to let and const it can be different***
>- ***b which is declared outside  and inside are refrenced to different scopes***
>- ***This behaviour is same in functions as well***
>- ***var is function scope***

![scope](./assests/scope.png)

            var a =100;
            let b =100;
            {
                var a =10;
                let b=20;
                console.log(a) // it will print 10 , because its shadow or replace value of a with 10
                console.log(b) // it will print 20
            }
            console.log(a) // It will print 10
            console.log(b) // It will print 100
        


# Closures

>- ***A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)***

            <!-- Example of simple clousure -->
            function x(){
                var a=7;
                function y(){
                    console.log(a); // here the a is referring to the memory of a
                }
                return y;
            }
            const z = x();
            z()  // output is 7

***Uses of Clousures***

>- ***Modules Design pattern***
>- ***Currying***
>- ***Functions like one***
>- ***Memoize***
>- ***Maintaining state in async world***
>- ***SetTimeouts***
>- ***Iterators***


***Usage of clousures in SetTimeout***

>- ***In the Below Example when js engine comes to setTimeout , it takes the call back function at attach call back function it***
>- ***Once time is expires then it bring back the call back funciton to the call stack***

        function x(){
            var i=1;
            setTimeout( () => {
                console.log(i);
            },3000)
            console.log("Namstey Javascript");
        }

        output :
            Namstey Javascript
            1


>- ***Why it executed this way? Its beacuse of clousures***
>- ***As we using intializing the variable with var i reference is same for all the closures***
>- ***Once the time got Expired the value of i is already 3 , so it print 3 three times***
>- ***One way to fix this issue is using of let instead of var***
          function x(){
            for(var i=1 ; i<=3 ; i++){
                setTimeout( () => {
                console.log(i);
                },i*1000)
            }
            console.log("Namstey Javascript");
        }

        output:
            Namstey Javascript
            3
            3
            3

***Another way of fixing above code***

        function x(){
            for(var i=1 ; i<=3 ; i++){
                function y(data) {
                    setTimeout( () => {
                        console.log(data);
                        },i*1000)
                    }
                y(i)
            }
            console.log("Namstey Javascript");
        }

         output:
            Namstey Javascript
            1
            2
            3
        

# Functions 

***Function Statement or declaration***

>- ***Function statements can be hoisted***

        function x(){

        }

***Function Expression***

>- ***JS engine consider this as a variable***
        const x = function () {}


***Anonymous function***
>- ***A function without a name is called Anonymous function***
>- ***We can use it while returing a function or function expression or arrow function***

        function x() {
            return function () {
                    console.log("Helllo");
            }
        }

        const x = function () {}

***Difference between function arguments and parameter***

        function y(a,b,c) {          // here a , b  , c are called parameters
            console.log(a,b,c)
        }

        y(1,2,3) // here 1,2,3 are called arguments

***First call Functions***
>- ***Functions which can pass as arguments and return function from a function is called first class functions***