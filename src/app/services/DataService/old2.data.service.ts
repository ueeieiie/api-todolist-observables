import { cloneDeep } from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  list: {text: string, isCompleted: boolean}[] = [];

  constructor() { }

  /**
   * get() method:
   * 
   * sends back the list of tasks
   * @return {Promise} new Promise
   */
  get(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(cloneDeep(this.list));
      }, 500);
    })
  }

/**
 * add() method:
 * 
 * adds a new task to the list
 * @param {Object} task 
 * @return {Promise} new Promise
 */
  add(task){
    return new Promise((res, rej) => {
      setTimeout( () => {
        this.list.push(task);
        res();
      }, 500);
    });
  }

  /**
   * remove() method:
   * 
   * removes the indexed task from the list
   * @param {Number} index 
   * @return {Promise} new Promise
   */
  remove(index){
    return new Promise( (res, rej) => {
      setTimeout(() => {
        this.list.splice(index, 1);
        res();
      }, 500);
    });
  }

  /**
   * edit() method:
   * 
   * edits the indexed task and assign to it a new text
   * @param {Number} index 
   * @param {String} editedTask 
   * @return {Promise} new Promise
   */
  edit(index, editedTask){
    return new Promise( (res, rej) => {
      setTimeout( () => {
        this.list[index].text = editedTask;
        res();
      }, 500)
    });
  }

  /**
   * toggleCompleted() method:
   * 
   * toggles the task's "isComplete" state
   * @param {Number} index 
   * @return {Promise} new Promise
   */
  toggleCompleted(index){
    let { isCompleted } = this.list[index];

    return new Promise((res, rej) => {
      setTimeout(() => {
        this.list[index].isCompleted = !isCompleted;
        res();
      }, 500);
    })
  }
}
