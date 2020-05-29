import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'task', component: TaskComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'list-task', pathMatch: 'full' },
      { path: 'add-task', component: CreateTaskComponent },
      { path: 'list-task', component: ListTaskComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
