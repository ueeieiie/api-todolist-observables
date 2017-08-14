import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Services
import { LocalStorageService } from '../LocalStorageService/localStroage.service'

@Injectable()
export class DataService {

	quizData = {
		currentQuestion: 0,
		questions: [
			{
				question: 'how much is 1 + 1?',
				answers: [2, 10, 100, 0],
				selected: null,
				correct: 0,
			},
			{
				question: 'how much is 10 + 10?',
				answers: [-9, 20, 33.4, 500],
				selected: null,
				correct: 1,
			},
			{
				question: 'how much is 100 + 100?',
				answers: [12, 1000, 200, 0.1],
				selected: null,
				correct: 2,
			},
			{
				question: 'how much is 1000 + 1000?',
				answers: [1.0000, 100000, 7, 2000],
				selected: null,
				correct: 3,
			}
		]
	};

constructor(private localStorageService: LocalStorageService) { }

/**
 * getQuizData() method:
 * 
 * returns Observable of the quizData data
 * @return {Observable}
 */
getQuizData(){
	return new Observable(observer => {
		setTimeout(() => {
			observer.next(this.quizData);
			observer.complete();
		}, 500)
	});
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
	return this.get().flatMap((data: any[]) => {
		let list = data;
		list.push(task);
		this.localStorageService.set('list', list);
		return Observable.of(true);
	});

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
			this.get().subscribe((data: any) => {
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
			this.get().subscribe((data: any) => {
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
			this.get().subscribe((data: any) => {
				let list = data;
				list[index].isComplete = !list[index].isComplete;
				this.localStorageService.set('list', list);
				observer.next();
			});

		}, 500);
	})
}
}
