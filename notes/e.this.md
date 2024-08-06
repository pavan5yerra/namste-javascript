# This Keyword

## This in Global space
>-  ***This point to global object***
>-  ***Global object in browser is window &  node js  is global. Global Object may differ from env to env***

## This in function
>- ***The Value of this depends on strict & non strict mode***
>- ***In strict mode the value of this undefined***
>- ***In NonStrictMode the value of this is windows***

## What is This Substitution
>- ***It happens in non-strict mode. Whenever the value of this is undefined It will be replaced with global object***


***Note : Please assume every code example is running under strict mode***

>- ***This keyword value depends on how its called***

        function x(){
            console.log(this);
        }

        x() --> the value of this is undefined
        window.x() --> the value of this window


## This inside Objects method 

        const student = {
            name : "pavan",
            printName : function (){
                console.log(this.name); // This represents the object
            }
        }

        const student2 = {
            name : "Jumbo"
        }

        <!-- See few execution below -->

        student.printName()  --> the value of this is student object --> output is pavan
        student.printName.call(student2) --> The value of this is studen2 object --> output is Jumbo



## This inside Arrow Functions
>- ***Arrow function wont have own this . so it will point out to its scope where it is underlying (enclosing lexical context)**

```javascript
        const obj = {
            a:10,
            x:() => {
                console.log(this); // the value of this is global , because x is lying under obj and obj is in global space.
            }
        }

        obj.x() --> output is window



        const obj2 = {
            a:10,
            x : function () {
                const y = () => {
                    console.log(this);  // the value of this is obj2 , because y function is under obj2 object
                }
                y();
            }
        }

        obj2.x();


        
        const obj2 = {
            a:10,
            x : function () {
                    console.log(this) //  the value of this object , because this is called using obj2.x
                        function y ()  {
                                // the value of  below this is undefined in strict mode and window in non strict mode , 
                                //becuase y func is called directly , so it won't attach any object to it.
                            console.log(this); 
                        }
                    y();
                    this.y = y;
                    this.y();
            }
        }

        obj2.x();
```


