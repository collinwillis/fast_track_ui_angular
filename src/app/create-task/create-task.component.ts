import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/Task';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  appForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    hours: new FormControl(''),
  });
  taskToEdit: Task = new Task(0, '', '', 0, 0);
  tasks: Task[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskServiceService
  ) {}
  //Add Task to db
  onSubmit(data: { name: string; description: string; hours: number }) {
    this.taskToEdit.Name = data.name;
    this.taskToEdit.Description = data.description;
    this.taskToEdit.Hours = data.hours;
    this.service.createTask(this.taskToEdit, (data: any) => {
      this.router.navigate(['/home']);
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
