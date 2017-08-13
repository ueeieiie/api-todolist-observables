import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/DataService/data.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() index;
  @Input() taskData;

  @Output() onTaskChangeHandler = new EventEmitter();

  editMode: boolean = false;

  constructor(private dataService: DataService) { }

  /**
   * setEditMode() method:
   * 
   * sets to edit mode
   */
  setEditMode() {
    this.editMode = true;
  }

  /**
   * saveEditedTask() method:
   * 
   * saves the the task's text
   * @param {HTMLInputElement} editedTask 
   */
  saveEditedTask(editedTask: HTMLInputElement) {
    this.dataService.edit(this.index, editedTask.value).subscribe(() => {
      this.editMode = false;
      this.onTaskChangeHandler.emit();
    });
  }

  /**
   * removeTask() method:
   * 
   * removes specific task by index
   */
  removeTask() {
    this.dataService.remove(this.index).subscribe(() => {
      this.onTaskChangeHandler.emit();
    });
  }

  /**
   * toggleCompleted() method:
   * 
   * sends a request to the dataService
   * to toggele the "isComplete" state
   * of the indexed task in the list data
   */
  toggleCompleted() {
    this.dataService.toggleCompleted(this.index).subscribe(() => {
      this.onTaskChangeHandler.emit();
    });
  }
}
