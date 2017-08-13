import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Services
import { LocalStorageService } from '../LocalStorageService/localStroage.service' 

@Injectable()
export class DataService {
  constructor(private localStorageService: LocalStorageService) {
   }

  /**
   * get() method:
   *
   * 1. call localStorageService to get the list 
   * 2. sends the list to whoever called it
   * @return {Observable} 
   */
  get(){
      return new Observable(observer => {
        setTimeout(() => {
            observer.next(this.localStorageService.get('list') || []);
            observer.complete();
        }, 500);
      }); 
  }

/**
 * add() method:
 * 
 * 1. get the list from the localStorageService 
 * 2. adds a new task to the list
 * @param {Object} task 
 * @return {Observable} 
 */
  add(task){
    // return new Observable(observer => {
    //   setTimeout(() => {        
    //     this.get().subscribe((data: any) => {
    //       let list = data
    //       list.push(task);
    //       this.localStorageService.set('list', list);
    //       observer.next();
    //     });
        
    //   }, 500);
    // });

    return this.get().flatMap((data:any[]) => {
      let list = data;
      list.push(task);
      this.localStorageService.set('list', list);
      return Observable.of(true);
    });
  }

  /**
   * remove() method:
   * 1. get the list from the localStorageService  
   * 2 removes the indexed task from the list
   * @param {Number} index 
   * @return {Observable} 
   */
  remove(index){
    return new Observable(observer => {
      setTimeout(() => {
        this.get().subscribe((data: any)=> {
          let list = data;
          list.splice(index, 1);
          this.localStorageService.set('list', list);
          observer.next();
        });

      }, 500);
    });
  }

  /**
   * edit() method:
   * 1. get the list from the localStorageService 
   * 2. edits the indexed task and assign to it a new text
   * @param {Number} index 
   * @param {String} editedTask 
   * @return {Observable} 
   */
  edit(index, editedTask){
    return new Observable(observer => {
      setTimeout(() => {
        this.get().subscribe((data: any)=> {
          let list = data;
          list[index].text = editedTask;
          this.localStorageService.set('list', list);
          observer.next();
        });

      }, 500)
    });
  }

  /**
   * toggleCompleted() method:
   * 1. get the list from the localStorageService  
   * 2. toggles the task's "isComplete" state
   * @param {Number} index 
   * @return {Observable} 
   */
  toggleCompleted(index){  
    return new Observable(observer => {
      setTimeout(() => {
        this.get().subscribe((data: any)=> {
          let list = data;
          list[index].isComplete = !list[index].isComplete;
          this.localStorageService.set('list', list);
          observer.next();
        });

      }, 500);
    })
  }
}
