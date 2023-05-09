import { Component } from '@angular/core';
import { ITask } from '../tasks.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  


  task: ITask = {
    id: 1,
    title: 'Modulos con Angular',
    hours: 5
  }

}
