//selectors
const buttons = document.querySelector('#cards')
const  image = document.querySelector('#image')
const  name = document.querySelector('#name')
const  job = document.querySelector('#job')
const  about = document.querySelector('#about')

const getData = delegationData()


//eventhandlers

buttons.addEventListener('click',(event)=> getData(event))




//delegation 
function delegationData()
{
    let index =0
 const cardsdata = [
    {
        image:"",
        name : "Pavan Yerra0",
        designation : "Enginerr0",
        about:"Hello iam fyn0"
    },
    {
        image:"",
        name : "Pavan Yerra1",
        designation : "Enginerr1",
        about:"Hello iam good1"
    },
    {
        image:"",
        name : "Pavan Yerra2",
        designation : "Enginerr2",
        about:"Hello iam sometimes2"
    },
    {
        image:"",
        name : "Pavan Yerra3",
        designation : "Enginerr3",
        about:"Hello iam not fyn at all3"
    }
    ]
    return (event) => {
        let card;
        if(event.target.dataset.surprise!=undefined){
            index = Math.floor(Math.random() * cardsdata.length)
            card= cardsdata[index]
            assignData(card)
        }

        else{
            if(index>=cardsdata.length-1){
                index=0
            }
            else{
                index++
            }
            card= cardsdata[index]
            assignData(card)
        }
        
        function assignData(card){
            image.innerText=card.image
            name.innerText=card.name    
            job.innerText=card.designation
            about.innerText=card.about
        }

    }
       
}