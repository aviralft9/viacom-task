import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemspageComponent } from './additemspage/additemspage.component';
import { ListitemspageComponent } from './listitemspage/listitemspage.component';

const routes: Routes = [
  { path: 'AddItems', component: AdditemspageComponent},
  { path: 'ListItems', component: ListitemspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
