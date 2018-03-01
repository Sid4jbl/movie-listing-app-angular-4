import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { MoviesService }            from '../movies/movies.service';

declare var $: any;

@Component({
  selector: 'mla-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  placeholder: string;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.placeholder = 'Search for more movies';
  }

  search(query: string) {
    if (/\S/.test(query)) {
      this.router.navigate(['/search', query]);
    }
  }

}
