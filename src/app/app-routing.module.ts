import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "exercises", component: ExercisesComponent
  },
  {
    path: "workouts", component: WorkoutsComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "resources", component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
