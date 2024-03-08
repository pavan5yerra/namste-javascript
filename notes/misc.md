# Hoc

>-  ***A Function which takes another function as an argument and return a function is Higher Order Function***


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



