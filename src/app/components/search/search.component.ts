import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  providers: [SearchService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	public result = [];
  constructor(public searchService: SearchService,
  			  public route: ActivatedRoute,
  			  public router: Router ) {
  		/*this.route.params.subscribe(params  => {
  			console.log('params', params);
  			if(params['term']) {
  				this.doSearch(params['term']);
  			}
  			
  		});*/

  }
  ngOnInit() {}

  doSearch(searchTerm) {
    console.log(searchTerm);
    this.result = [];
  	//this.router.navigate(['search', searchTerm]);
  	if(searchTerm !== undefined) {
	  	this.searchService
	  	.searchApi(searchTerm)
	  	.subscribe((data) => {
	  		console.log('data is', data);
	  		for(let i=0;i<data.length;i++) {
	  			this.result.push({
	  				name: data[i].artist,
	  				link: data[i].link,
	  				track: data[i].track,
	  				artistId: data[i].artistId
	  			});
	  		}
	  	});
  	}
  	

  }

}
