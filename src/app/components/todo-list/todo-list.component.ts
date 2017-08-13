import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService/data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  list: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getList();
  }

  /**
   * getList() method:
   * 
   * sends a request to the dataService
   * get in return the list data,
   * and assign it to the component's local list data
   */
  getList() {
    this.dataService.get().subscribe(data => {
      this.list = data;
    });
  }
}
