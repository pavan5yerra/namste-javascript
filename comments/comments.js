
//variables
let commenText='';
let count=0;
function getData(event){
    commenText=event.target.value
    console.log(commenText)
}


//selectors
const commentarea = document.querySelector('#commentarea');
const submitButton = document.querySelector('#submit');
const comments = document.getElementById("comments");
//const replybutton = document.querySelector('#replybutton');

//addevent listeners
commentarea.addEventListener('change',getData);
submitButton.addEventListener('click',() => displayCommment(commenText,comments));
//replybutton.addEventListener('click',addNewTextArea)


//actions

function displayCommment(commenText,element){
            //creating element div
            const commdiv =  createNewComponent("div",null,null,{"class":"subcomm","id":`displaycomment${count++}`})
            console.log(commdiv.id)
            //creating element para
            const commpara =  createNewComponent("p",commenText,null,{"class":"commpara"})
            //creating element button
            const replybutton =  createNewComponent("button","reply",{"click":()=> replyComment(commdiv.id)},{"class":"button",'id':`replybutton`})
            const breaka =  createNewComponent("br",null,null,null)

            //linking the components
            commdiv.appendChild(commpara);
            commdiv.appendChild(replybutton);
            commdiv.appendChild(breaka);
            //const comment = document.getElementById("comments");
            element.appendChild(commdiv)
}


function replyComment(id){
            const element = document.getElementById(id);  
            const replycontainer =  createNewComponent("textarea",null,{"change":getData},{"id":"replycontainer","placeholder":"reply to comment"})
            const submitbutton =  createNewComponent("button","submit",{"click":()=>displayCommment(commenText,element)},{"class":"button",'id':`submitbutton`})
            const breaka =  createNewComponent("br",null,null,null)
            element.appendChild(replycontainer)
            element.appendChild(submitbutton)
            element.appendChild(breaka)
}

function createNewComponent(tagName,text,events,attributes){
    const element = document.createElement(tagName);
    
    if(text!=null){
        const textElement= document.createTextNode(text);
         element.appendChild(textElement);
    }
    //attribute iterator
    if(attributes!=null){
        for (let[key,value] of Object.entries(attributes)){
            element.setAttribute(key,value)
        }
    }
    //events handler
    if(events!=null){
        for (let[key,value] of Object.entries(events)){
            element.addEventListener(key,value)
        }
    }

    return element;
}

