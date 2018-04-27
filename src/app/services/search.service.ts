import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public artistId: number
              ) {
  }
}
@Injectable() 
export class SearchService {
	results: SearchItem[];
	apiRoot: string = 'https://itunes.apple.com/search';
	constructor(private http: Http) {
		this.results = [];
	}


	public searchApi(term: string) {
		console.log("api---------",term);
		let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
		console.log("api url",apiURL);
		return this.http.get(apiURL)
			   .map((response) => {
			   	console.log('response', response.json());
			   	return this.results = response.json().results
			   	.map(item => {
			   		return new SearchItem(
			   			item.trackName,
                		item.artistName,
                		item.trackViewUrl,
                		item.artistId
			   			);
			   	});
			   		
			   });
	}

	public TrackList(artistId:  number) {
		let apiURL = `https://itunes.apple.com/lookup?id=${artistId}&entity=song`;
		return this.http.get(apiURL)
			   .map((response) => {
			   		//console.log('reponse from lookup entity song', response.json().results);
			   		  return response.json().results.slice(1);
			   });
	}

}
 
