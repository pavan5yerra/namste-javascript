//selectors
const buttons = document.querySelector("#button-card");
const countervalue = document.querySelector("#value");
const changecounterValue = counterDelegation()
//eventhandler
buttons.addEventListener('click', (event)=> changecounterValue(event.target.id));






//event delegation
function counterDelegation()
{
    let counter=0
    return  (id) =>
    {
        switch(id)
        {
           case "increase-button":
                countervalue.innerText=counter++
                break;
            case"decrease-button":
                 countervalue.innerText=counter--
                break;
            case "reset-button":
                counter=0
                 countervalue.innerText=counter
                break;
        }
    }
}
