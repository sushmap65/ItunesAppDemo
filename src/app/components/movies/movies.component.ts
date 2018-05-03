import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  providers: [SearchService],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public filmlist = [];

  constructor(public searchService:SearchService,public route: ActivatedRoute,
  			  public router: Router) { }

  ngOnInit() {
  }
  searchMovie(value){
	console.log(value);
	this.filmlist = [];

	  	if(value !== undefined) {
	  	this.searchService
	  	.searchApi(value)
	  	.subscribe((data1) => {
	  		console.log('data is', data1);
	  		for(let i=0;i<data1.length;i++) {
	  			this.filmlist.push({
	  				name: data1[i].artist,
	  				link: data1[i].link,
	  				track: data1[i].track,
	  				artistId: data1[i].artistId
	  			});
	  		}
	  	});
  	}

  }

}
