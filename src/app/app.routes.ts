import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './components/app/app.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuizComponent } from './components/quiz/quiz.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'todolist', component: ToDoListComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

export const routes = RouterModule.forRoot(appRoutes);