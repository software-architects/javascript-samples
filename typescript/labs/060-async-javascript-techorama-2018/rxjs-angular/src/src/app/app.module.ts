import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarMakesComponent } from './car-makes.component';

const routes: Routes = [
  { path: 'car-makes', component: CarMakesComponent },
  //{ path: 'car-model-details', component: CarModelDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'car-makes' },
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, 
    ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routes), MatToolbarModule,
    MatSidenavModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatAutocompleteModule, MatInputModule, MatCardModule,
    BrowserAnimationsModule, FlexLayoutModule
  ],
  declarations: [AppComponent, CarMakesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
