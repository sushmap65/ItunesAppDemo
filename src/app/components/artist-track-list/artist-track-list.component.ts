import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
	public artistId;
	public tracks;
  constructor(public searchService: SearchService,
  			  public activatedRoute: ActivatedRoute,
  			  public router: Router,
  			  public localStorageService: LocalStorageService) {
  	/*this.activatedRoute.params.subscribe(params => {
  	console.log('params', params);
  })*/
  		/*this.artistId = this.activatedRoute.snapshot.params['artistid'];
  		console.log('artistid', this.artistId);*/
  		this.artistId = this.localStorageService.get('artistId').artistid;
  		console.log('artistid', this.artistId);
  	}

  ngOnInit() {
  	if(this.artistId !== undefined) {
  		this.searchService
  		.TrackList(this.artistId)
  		.subscribe((data) => {
  			console.log('data', data);
  			this.tracks = data;
  		})
  	}
  	
  }

}
