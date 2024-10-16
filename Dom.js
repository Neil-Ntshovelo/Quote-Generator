//select the button and quote elemet

let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person =document.querySelector('.person');


//array of quotes
const quotes =[{
    quote : `"But if you call me Anne, please call me Anne spelled with an E.”`,
    person : `L. M. Montgomery`
},{
    quote : `“What’s in a name? that which we call a rose
    By any other name would smell as sweet.”`,
    person : `William Shakespeare`
},
{
    quote : `“We learned to lip-read, our heads flat on the beds, turned sideways, watching each other’s mouths. In this way we exchanged names from bed to bed:"`,
    person : `Margaret Atwood`

},
{
    quote : `“Nobody -- that’s my name. Nobody -- so my mother and father call me, all my friends.”`,
    person : `Homer`

},

];

//add event listener to the button

btn.addEventListener('click',function(){

    //random index
    let randomIndex = Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[randomIndex].quote;
    person.innerText= quotes[randomIndex].person;
});
