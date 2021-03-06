import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { YearsComponent } from './pages/years/years.component';
import { MovieInYearsComponent } from './pages/years/movie-in-years/movie-in-years.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'years',
    component: YearsComponent
  },
  {
    path: 'year/:year',
    component: MovieInYearsComponent
  },
  {
    path: 'category/:category',
    component: MoviesInCategoryComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // base routing use method only once
  exports: [RouterModule]
})
export class AppRoutingModule {}
