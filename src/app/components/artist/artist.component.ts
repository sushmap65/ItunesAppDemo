import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  //@Input() public TrackData;
  constructor(public route: ActivatedRoute,
  			  public localStorageService: LocalStorageService) {
  this.route.params.subscribe(params => {
  	console.log(params);

  	this.localStorageService.set('artistId', params);
  }); 
}

  ngOnInit() {
  	//console.log('artis acomponent');
  }

}
