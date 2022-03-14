import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/Task';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  appForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    hours: new FormControl(''),
  });
  taskToEdit: Task = new Task(0, 'Yerrrr', '', 0, 0);
  tasks: Task[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskServiceService
  ) {}
  onSubmit(data: { name: string; description: string; hours: number }) {
    this.taskToEdit.Name = data.name;
    this.taskToEdit.Description = data.description;
    this.taskToEdit.Hours = data.hours;
    this.service.updateTask(this.taskToEdit, (data: any) => {
      this.router.navigate(['/home']);
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.service.getTask(
      parseInt(this.route.snapshot.paramMap.get('id') as string),
      (returnedTask: any) => {
        this.taskToEdit.Id = returnedTask.id;
        this.taskToEdit.Name = returnedTask.name;
        this.taskToEdit.Description = returnedTask.description;
        this.taskToEdit.Hours = returnedTask.hours;
        this.taskToEdit.Status = returnedTask.status;
        this.appForm.patchValue({
          name: this.taskToEdit.Name,
          description: this.taskToEdit.Description,
          hours: this.taskToEdit.Hours,
        });
      }
    );
  }
}
