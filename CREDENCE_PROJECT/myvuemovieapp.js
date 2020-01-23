Vue.component('movie-detail',{

	props:['movie'],

	template:`
	<div>
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.Title}}</h5>
    
    <a href="https://www.google.com/" class="btn btn-primary">Description</a>
  </div>
</div>
</div>
	`
});

new Vue({
	el:"#credence_movie_app",
	data:{
		searchKey:'',
		movieList:[]
	},

	methods:{

		searchMovies()
		{
			var url='http://www.omdbapi.com/?s=' + this.searchKey + '&apikey=19662a8d';
			fetch(url)
			.then(response => response.json())
			.then(data => {
				this.movieList=data;
			})
		}
	}

})