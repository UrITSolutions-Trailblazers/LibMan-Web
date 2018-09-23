import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { ReaderMasterComponent } from './reader-master/reader-master.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'bookMaster',
    component: BookMasterComponent
  },
  {
    path: 'readerMaster',
    component: ReaderMasterComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BooksComponent,
    BookMasterComponent,
    ReaderMasterComponent,
    ProfileComponent,
    ReportsComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    DynamicFormBuilderModule
  ],
  providers: [ FormsModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
