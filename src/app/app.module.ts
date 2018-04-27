import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SearchService } from './services';
import { LocalStorageService } from './services';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import { ArtistAlbumnListComponent } from './components/artist-albumn-list/artist-albumn-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumnListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SearchService, LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
