//selectors
const buttons = document.querySelector('#cards')
const  image = document.querySelector('#image')
const  name = document.querySelector('#name')
const  job = document.querySelector('#job')
const  about = document.querySelector('#about')

 const getData = delegationData()


//eventhandlers

buttons.addEventListener('click',(event)=> {
    if(event.target.tagName=='BUTTON'){
            getData(event)
    }
    })
window.addEventListener('DOMContentLoaded', (event) => getData(event));


//delegation 
function delegationData()
{
    let index =0
 const cardsdata = [
     {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  }
    ]
    return (event) => {
        let card;
        if(event.target.id =="button-surprise"){
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
            image.src =card.img
            name.innerText=card.name    
            job.innerText=card.job
            about.innerText=card.text
        }

    }
       
}