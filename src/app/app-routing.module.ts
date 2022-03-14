import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskTableComponent } from './task-table/task-table.component';

const routes: Routes = [
  { path: 'home', component: TaskTableComponent },
  { path: 'edit/:id', component: EditTaskComponent },
  { path: 'create', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
