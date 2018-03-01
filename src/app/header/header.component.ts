import { Component, OnInit } from '@angular/core';
import { MoviesService }            from '../movies/movies.service';

@Component({
  selector: 'mla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Movie listing app';
  language : string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
  }
}
