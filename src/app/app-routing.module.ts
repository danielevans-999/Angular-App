import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalComponent } from './goal/goal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'goals', component:GoalComponent},
  { path: 'about', component: AboutComponent},
  {path:'goals/:id', component:GoalDetailsComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
