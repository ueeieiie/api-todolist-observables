import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Services
import { LocalStorageService } from '../LocalStorageService/localStroage.service' 

@Injectable()
export class DataService {
  constructor(private localStorageService: LocalStorageService) {
    console.log(Observable)
   }

  /**
   * get() method:
   *
   * 1. call localStorageService to get the list 
   * 2. sends the list to whoever called it
   * @return {Promise} new Promise
   */
  get(){
      return new Promise((res, rej) => {
        setTimeout(() => {
            res(this.localStorageService.get('list') || []);
        }, 500);
      }); 
  }

/**
 * add() method:
 * 
 * 1. get the list from the localStorageService 
 * 2. adds a new task to the list
 * @param {Object} task 
 * @return {Promise} new Promise
 */
  add(task){
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.get().then((data: any)=> {
          let list = data;
          list.push(task);
          this.localStorageService.set('list', list);
        });
        res();
      }, 500);
    });
  }

  /**
   * remove() method:
   * 1. get the list from the localStorageService  
   * 2 removes the indexed task from the list
   * @param {Number} index 
   * @return {Promise} new Promise
   */
  remove(index){
    return new Promise( (res, rej) => {
      setTimeout(() => {
        this.get().then((data: any)=> {
          let list = data;
          list.splice(index, 1);
          this.localStorageService.set('list', list);
        });
        res();
      }, 500);
    });
  }

  /**
   * edit() method:
   * 1. get the list from the localStorageService 
   * 2. edits the indexed task and assign to it a new text
   * @param {Number} index 
   * @param {String} editedTask 
   * @return {Promise} new Promise
   */
  edit(index, editedTask){
    return new Promise( (res, rej) => {
      setTimeout(() => {
        this.get().then((data: any)=> {
          let list = data;
          list[index].text = editedTask;
          this.localStorageService.set('list', list);
        });
        res();
      }, 500)
    });
  }

  /**
   * toggleCompleted() method:
   * 1. get the list from the localStorageService  
   * 2. toggles the task's "isComplete" state
   * @param {Number} index 
   * @return {Promise} new Promise
   */
  toggleCompleted(index){  
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.get().then((data: any)=> {
          let list = data;
          list[index].isComplete = !list[index].isComplete;
          this.localStorageService.set('list', list);
        });
        res();
      }, 500);
    })
  }
}
