// This line gets the DOM element with ID 'now-playing'
const nowPlayingUl = document.getElementById('now-playing')
const url='http://localhost:3000/films'

      
function displayMovies(films) {
films.forEach(film=>{
   console.log(film.title)

 //pointing to the point the films will be rendered on the DOM  
let card=document.getElementById('films')

//list item to hold all Film details
let li=document.createElement('li')
li.className='col-md-3' //class added to each List item

let Poster=document.createElement('div') //each li has a child div element that holds image and cardBody
Poster.className='card my-4' //style="width: 300px
let image =document.createElement('img')
image.className='card-img-top'
image.src=film.poster//assigning the value of the FILM FROM THE SERVER

//this is the card that holds the rest of the FILMS data values
let cardBody=document.createElement('div')
cardBody.className='card-body'

//Now we create child elements of Card body
 let movieTitle=document.createElement('p')
 movieTitle.className='card-title'
 movieTitle.innerText=film.title//assiging the movieTitle value

 let movieRuntime=document.createElement('p')
 movieRuntime.className='card-title'
 let showTime=document.createElement('p')
 showTime.className='card-title'
 
 let availableTickets=document.createElement('p')
 availableTickets.className='card-title'
   
let buyTicketButton=document.createElement('button')
buyTicketButton.setAttribute("id", "my-button");

   //adding cardBody children to the DOM
    cardBody.appendChild(movieTitle)
    cardBody.appendChild(movieRuntime)
    cardBody.appendChild(showTime)
    cardBody.appendChild(availableTickets)
    cardBody.appendChild(buyTicketButton)

 //Adding MAin poster childre
    Poster.appendChild(image)// image is a child of Main parent
    Poster.appendChild(cardBody)//cardBody is a child of Main parent

  //adding the final child to the DOM  
    li.appendChild(Poster) //Main parent

    card.appendChild(li)
    })  
}

//function to get all movies
function showMovies() {
    fetch(url)
    .then(res=>res.json())
    .then(films=>displayMovies(films))
}

//when the DOM loads get all movies
window.addEventListener('load',showMovies)


