import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './components/app/app.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
    {path: 'todolist', component: ToDoListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

export default RouterModule.forRoot(appRoutes);