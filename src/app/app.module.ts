import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// NGX-Bootstrap
import { AlertModule } from 'ngx-bootstrap';

// Services
import { DataService } from './services/DataService/data.service'
import { LocalStorageService } from './services/LocalStorageService/localStroage.service'

// Routes
import { routes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuizComponent } from './components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    ToDoListComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    QuizComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [DataService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
