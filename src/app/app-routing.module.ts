import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { Page404Component } from './components/page404/page404.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movies", component: MoviesComponent },
  { path: "page404", component: Page404Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "signin", component: SigninComponent },
  { path: "movie/:id", component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
