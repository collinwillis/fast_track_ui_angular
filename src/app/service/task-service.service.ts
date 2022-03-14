import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  hostname: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getTasks(callback: any) {
    this.http.get<Task[]>(this.hostname + '/tasks').subscribe((data) => {
      let tasks: Task[] = [];
      for (let x = 0; x < data.length; ++x) {
        console.log(data[x]);
        tasks.push(
          new Task(
            data[x]['id'],
            data[x]['name'],
            data[x]['description'],
            data[x]['hours'],
            data[x]['status']
          )
        );
      }
      callback(tasks);
    });
  }

  public createTask(Task: Task, callback: any) {
    this.http.post<Task>(this.hostname + '/tasks', Task).subscribe((data) => {
      callback(data);
    });
  }

  public updateTask(Task: Task, callback: any) {
    this.http.put<Task>(this.hostname + '/tasks', Task).subscribe((data) => {
      callback(data);
    });
  }

  public deleteTask(id: number, callback: any) {
    this.http.delete(this.hostname + '/tasks/' + id).subscribe((data) => {
      callback(data);
    });
  }

  public getTask(id: number, callback: any) {
    this.http.get<Task>(this.hostname + '/tasks/' + id).subscribe((data) => {
      callback(data);
    });
  }
}
