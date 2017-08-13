import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/DataService/data.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output() onAddNewTaskHandler = new EventEmitter();

  constructor(private dataService: DataService) { }

  /**
   * sends a request to the dataService
   * to add the new task to its stored list,
   * and emit "onAddNewTaskHandler" event to get  "list" component
   * trigger "getList()" and get the updated list 
   * @param task 
   */
  add(task: HTMLInputElement) {
    this.dataService.add({
      text: task.value,
      isCompleted: false
    }).subscribe(() => {
      this.onAddNewTaskHandler.emit();
      task.value = '';
    });
  }
}
