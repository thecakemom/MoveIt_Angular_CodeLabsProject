import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponent } from './shared/shared.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavigationComponent,
    AuthComponent,
    SignupComponent,
    HomeComponent,
    ExercisesComponent,
    WorkoutsComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
