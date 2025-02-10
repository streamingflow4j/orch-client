import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { routingComponents } from './app.routes';
import { RouterModule } from '@angular/router';



@NgModule({

  imports: [
    AppComponent,
    routingComponents,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AppModule { }
