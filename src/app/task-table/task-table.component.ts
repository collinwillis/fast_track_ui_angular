import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { Task } from '../models/Task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];
  perentComplete = '';
  totalHours = 0;
  completedHours = 0;

  constructor(private service: TaskServiceService) {}

  onUpdateStatus(task: Task) {
    if (task.Status === 1) {
      task.Status = 0;
    } else {
      task.Status = 1;
    }
    this.service.updateTask(task, () => {
      this.service.getTasks((tasks: Task[]) => {
        this.tasks = tasks;
        this.totalHours = this.tasks.reduce((acc, task) => {
          return acc + task.Hours;
        }, 0);
        this.completedHours = this.tasks.reduce((acc, task) => {
          return acc + task.Hours * task.Status;
        }, 0);
        this.perentComplete =
          Math.round((this.completedHours / this.totalHours) * 100) + '%';
      });
    });
  }

  onDeleteTask(task: Task) {
    this.service.deleteTask(task.Id, () => {
      this.service.getTasks((tasks: Task[]) => {
        this.tasks = tasks;
        this.totalHours = this.tasks.reduce((acc, task) => {
          return acc + task.Hours;
        }, 0);
        this.completedHours = this.tasks.reduce((acc, task) => {
          return acc + task.Hours * task.Status;
        }, 0);
        this.perentComplete =
          Math.round((this.completedHours / this.totalHours) * 100) + '%';
      });
    });
  }
  ngOnInit(): void {
    this.service.getTasks((tasks: Task[]) => {
      this.tasks = tasks;
      this.totalHours = this.tasks.reduce((acc, task) => {
        return acc + task.Hours;
      }, 0);
      this.completedHours = this.tasks.reduce((acc, task) => {
        return acc + task.Hours * task.Status;
      }, 0);
      this.perentComplete =
        Math.round((this.completedHours / this.totalHours) * 100) + '%';
    });
  }
}
