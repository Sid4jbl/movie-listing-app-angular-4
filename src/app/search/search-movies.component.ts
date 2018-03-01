import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { SearchService }            from './search.service';
import { MoviesService }            from '../movies/movies.service';
import { Movie }                    from '../movies/movie';

@Component({
  selector: 'mla-search-movies',
  templateUrl: 'search-movies.component.html',
  styleUrls: ['search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: Movie[];
  results: number;
  page: number;
  query: string;

  constructor(
    private searchService: SearchService,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.query = params['query'];
        this.page = 1;
        this.searchMovies(this.query, this.page);
      });
  }

  searchMovies(query: string, page: number) {
    this.searchService.searchMovies(query, page)
      .subscribe(
        response => {
          this.movies = response['results'];
          this.results = response['total_results'];
        },
        error => console.error(error)
      );
  }

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
