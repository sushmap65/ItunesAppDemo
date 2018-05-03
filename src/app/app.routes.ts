import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';
import { MoviesComponent } from './components/movies';
import { SearchComponent } from './components/search';
import { ArtistComponent } from './components/artist';
import { ArtistTrackListComponent } from './components/artist-track-list';
import { ArtistAlbumnListComponent } from './components/artist-albumn-list';
export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'}, 
{ path: 'find', redirectTo: 'search'},
{ path: '', component: HomeComponent },
{path: 'movies', component: MoviesComponent},
{ path: 'home', component: HomeComponent },	
{ path: 'search', component: SearchComponent },	
{ path: 'artist/:artistid', component: ArtistComponent,
children:[
{path: '', redirectTo: 'tracks', pathMatch: 'full'},
{path: 'tracks', component: ArtistTrackListComponent},
{path: 'albumns', component: ArtistAlbumnListComponent}
] 
}
];