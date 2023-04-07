// This line gets the DOM element with ID 'now-playing'
const nowPlayingUl = document.getElementById("now-playing");
const url = "http://localhost:3000/films";

function displayMovies(films) {
  films.forEach((film) => {
    //    console.log(film.title)

    //pointing to the point the films will be rendered on the DOM
    let card = document.getElementById("films");

    //list item to hold all Film details
    let li = document.createElement("li");
    li.className = "col-md-3"; //class added to each List item

    let Poster = document.createElement("div"); //each li has a child div element that holds image and cardBody
    Poster.className = "card my-4"; //style="width: 300px
    let image = document.createElement("img");
    image.className = "card-img-top";
    image.src = film.poster; //assigning the value of the FILM FROM THE SERVER

    //this is the card that holds the rest of the FILMS data values
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    //Now we create child elements of Card body
    let movieTitle = document.createElement("p");
    movieTitle.className = "card-title";
    movieTitle.innerText = film.title; //assiging the movieTitle value

    let movieRuntime = document.createElement("p");
    movieRuntime.className = "card-title";
    let showTime = document.createElement("p");
    showTime.className = "card-title";
    showTime.innerText = film.showtime;

    let availableTickets = document.createElement("h5");
    availableTickets.className = "card-title";
    availableTickets.setAttribute("class", "ticket");
    availableTickets.setAttribute("id", "tick"); //ID of tick
    availableTickets.innerText = `Available Tickets : ${
      film.capacity - film.tickets_sold
    }`;
    let buyTicketButton = document.createElement("button");
    buyTicketButton.setAttribute("id", "my-button");
    buyTicketButton.innerText = "Buy Ticket";

    //adding cardBody children to the DOM
    cardBody.appendChild(movieTitle);

    //Adding MAin poster childre
    //Poster.appendChild(image)// image is a child of Main parent
    Poster.appendChild(cardBody); //cardBody is a child of Main parent

    //adding the final child to the DOM
    li.appendChild(Poster); //Main parent
    card.appendChild(li);

    movieTitle.addEventListener("click", (e) => {
      console.log("add info");
      document.getElementById("title-data").innerText = film.title;
      document.getElementById("img").src = film.poster;
      let Tickets = document.getElementById("available-tickets");
      Tickets.innerText = ` Available tickets: ${
        film.capacity - film.tickets_sold
      }`;

      document.getElementById("buy-tickets").addEventListener("click", () => {
        let Tickets = document.getElementById("available-tickets");
        Tickets.innerText = ` Available tickets: ${
          film.capacity - film.tickets_sold - 1
        }`;
      });
    });
    //Lets get some events firing
    buyTicketButton.addEventListener("click", () => {
      console.log("clicked");
      let val = document.getElementById("tick");
      val.innerText = `Available tickets : ${
        film.capacity - film.tickets_sold - 1
      }`;
    });
  });
}

//function to get all movies
function showMovies() {
  fetch(url)
    .then((res) => res.json())
    .then((films) => {
      displayMovies(films);
    });
}

function AllMovies() {
  fetch(url)
    .then((res) => res.json())
    .then((films) => {
      displayAllmovie(films);
    });
}
AllMovies()
function displayAllmovie(films) {
  films.forEach((film) => {
    console.log(film.title);
    let filmCard = document.createElement("div");
    filmCard.className = "card";
    filmCard.classList.add("col-12", "col-md-4", "mx-2", "my-2");
    let Title = document.createElement("p");
    Title.innerText = film.title;
    let posterImg = document.createElement("img");
    posterImg.src = film.poster;
    let Showtime = document.createElement("p");
    Showtime.innerText = film.showtime;

    filmCard.appendChild(Title);
    filmCard.appendChild(posterImg);
    filmCard.appendChild(Showtime);
    document.getElementById("all-shows").appendChild(filmCard);
  });
}
//when the DOM loads get all movies
window.addEventListener("load", showMovies);
