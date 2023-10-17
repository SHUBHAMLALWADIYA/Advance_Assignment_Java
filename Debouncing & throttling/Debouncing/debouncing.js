
let mySearch = document.getElementsByClassName("search-button");
let input = document.getElementById("search-box");
    let screen = document.getElementById("list");
let gap;


input.addEventListener("input",()=>{

  clearTimeout(gap);
  gap=setTimeout(search,500)
})
   

async function search(){
  let value=input.value;

console.log("done")
  if(value.trim()===""){

    screen.innerHTML="";
    return;
  }


  
  const url = `https://www.omdbapi.com/?apikey=a61aee57&s=${input.value}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
          const movies = data.Search;
          displayMovies(movies);
      } else {
          screen.innerHTML = 'No results found';
      }
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function displayMovies(movies) {
  const html = movies.map(movie => `
  <div class="box">
  <img src="${movie.Poster}" alt="">
  <h3>Title : ${movie.Title}</h3>
  <p> Year : ${movie.Year}</p>
  <h4> ImdbID :  ${movie.imdbID}</h4>
</div>`
  ).join('');

  screen.innerHTML = html;
}


     
