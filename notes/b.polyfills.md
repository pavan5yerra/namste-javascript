# Polyfills 



## Usage of call , apply & bind

```javascript
    
         const student = {
                name : "pavan",
                printName : function (wish,age){
                    console.log(wish + this.name  + age); 
                }
            }
        
            const student2 = {
                name : "Jumbo"
            }


        student.printName("helooo " , 15);
        student.printName.call(student2, "Hello call ",20);
        student.printName.apply(student2,["hello apply ",25]);
        const wishme = student.printName.bind(student2,"Hello bind",30);
        wishme();
```

## Polyfill of call 


```javascript

    Function.prototype.myCall = function (obj,...args) {
              obj.ref=this;
              obj.ref(...args);
        }
        student.printName.myCall(student2, "Hello mycall" , 15);
```

## Polyfill of apply


```javascript
   Function.prototype.myApply = function (obj, args){
              obj.ref = this;
              obj.ref(...args);
        }
        
        student.printName.myApply(student2, ["Hello myapply" , 25]);
```
## Ployfill of bind

```javascript
    Function.prototype.myBind = function (obj,...args1){
            obj.ref=this;
            return function (...args2) {
               obj.ref(...args1 , ...args2)
            }
        }
        
        const binder = student.printName.myBind(student2, "Hello myBind");
        binder("35");
```



## Usage of map, filter &  reduce
```javascript
    const arr =[1,2,3,4,5];
    console.log(arr.map((x) => x*2))  --> [2,4,6,8,10]
    console.log(arr.filter(x) => x%2==0) --> [2,4]
    console.log(arr.reduce(a,b) => a+b) --> 15
```
## Polyfill for map 
```javascript
    Array.prototype.myMap = function (func) {
        const res = [];
        
        for(let i=0 ; i<this.length ; i++){
            res.push(func(this[i]));
        }

        return res;
    }
```
## Polyfill for Filter 
```javascript
    Array.prototype.myFilter = function (func) {
        const res = [];
        
        for(let i=0 ; i<this.length ; i++){
            let status = func(this[i])
            if(status) res.push(this[i]);
        }

        return res;
    }
```

## Polyfill for reducer
```javascript
        Array.prototype.myReducer = function (func , init=0) {
        let acc=init;
        
        for(let i=0 ; i<this.length ; i++){
            acc=func(acc,this[i]);
        }
        return acc;
    }
```

