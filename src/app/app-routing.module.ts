import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailComponent } from "../app/cat-detail/cat-detail.component";
import { CatListComponent } from './cat-list/cat-list.component';
const routes: Routes = [
  {
    path: 'cat-detail',
    component: CatDetailComponent
  },
  {
    path: 'cat-list',
    component: CatListComponent,

  },
  {
    path: '',
    redirectTo: '/cat-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
