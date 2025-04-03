const state = {
  loading: true,
  error: '',
  response: {
    page: 0,
    totalPages: 0,
    results: [],
    totalResults: 0
  }
}

const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${state.response.page+1}&language=es-ES&sort_by=popularity.desc`;

const options = {
  method: 'GET', 
  headers: {
    accept: 'application/json', 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmMyYmVjOTk0YjFmZTYzMzAyYjhkMmFjNzE1NGEyZiIsIm5iZiI6MTYyNjgyMTcwMC44MjMsInN1YiI6IjYwZjc1NDQ0ZTcyZmU4MDA3NDk1YjVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JARZQIPxbbkPa4zJCvkWUCkN8ICk4rIZlx1sHUWWl8E',
  }
};

function getMovies() {
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      state.loading = false;
      state.response = json;
    })
    .catch(err => {
      state.loading = false;
      state.error = err.message;
    });
}

getMovies()
console.log(state)
