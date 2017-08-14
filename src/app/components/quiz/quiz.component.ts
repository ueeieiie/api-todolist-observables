import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService/data.service';
import { Router } from '@angular/router';
 
@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

	quizData: any;

	scoringMap = {
		0: 0,
		1: 25,
		2: 50,
		3: 75,
		4: 100
	};

	constructor(
		private dataService: DataService,
		private router: Router
	) { }

	ngOnInit() {
		this.dataService.getQuizData().subscribe((questions) => {
			this.quizData = questions;
		});
	}

	/**
	 * isPrevDisabled() method:
	 * 
	 * returns a boolean value to set the prev button disabled attribute
	 * @return {Boolean}
	 */
	isPrevDisabled(){
		return this.quizData.currentQuestion == 0 ? true : false;
	}


	/**
	 * nextQuestion() method:
	 * 
	 * by incrementing the currentQuestion num value
	 * the quiz's data changes
	 * @ 
	 */
	nextQuestion(){
		let { currentQuestion } = this.quizData;
		
		if(this.quizData.questions[currentQuestion].selected === null){
			console.log('choose an answer');
			return;

		} else if(currentQuestion !== 3){
			if(this.quizData.questions[currentQuestion].selected ==	this.quizData.questions[currentQuestion].correct){
				console.log('you answered correct');
				this.quizData.correctedAnswers += 1;
				console.log('number of corrected answers:', this.quizData.correctedAnswers);
			} else {
				console.log('You answered wrong');
			}
			this.quizData.currentQuestion += 1;

		} else {
			this.quizData.correctedAnswers += 1;			
			
			console.log(
				'You got', this.quizData.correctedAnswers, 
				'out of', this.quizData.questions.length, 
				'your score is:', this.getScore()
			);

			this.quizData.correctedAnswers = 0;
			this.quizData.currentQuestion = 0;

			alert('done!');
			this.router.navigate(['/home']);
		}
	}

	/**
	 * prevQuestion() method:
	 * 
	 * by decrementing the currentQuestion num value
	 * the quiz's data changes
	 */
	prevQuestion(){
		let { currentQuestion } = this.quizData;
		
		if(currentQuestion !== 0){
			this.quizData.currentQuestion -= 1;
		}
	}

	/**
	 * getNextButtonValue() method:
	 * 
	 * return the next button's value
	 */
	getNextButtonValue(){
		let { currentQuestion } = this.quizData;
		return currentQuestion == 3 ? 'done' : 'Next';
	}

	/**
	 * setAnswer() method:
	 * 
	 * updating quizData with:
	 *   1. checked - the state of each question's checked answer 
	 * 	 2. selected - the selected answer, for some later calculations
	 * @param {Event} e 
	 */
	setAnswer(e){
		console.clear();
		let { currentQuestion } = this.quizData;
		let index = parseInt(e.target.id);
		let checkedState = this.quizData.questions[currentQuestion].checked;

		// Resets checkedState values to false
		for(let c in checkedState){
			checkedState[c] = false;
		}
		console.log('reseted checkedState:', this.quizData.questions[currentQuestion].checked);

		this.quizData.questions[currentQuestion].checked[index] = true;
		this.quizData.questions[this.quizData.currentQuestion].selected = index;
		console.log('changed checkedState:', this.quizData.questions[currentQuestion].checked);
	}

	/**
	 * getScore() method:
	 * 
	 * returns the final score based on scoringMap data
	 * @return {Number}
	 */
	getScore(){
		let { correctedAnswers } = this.quizData;
		return this.scoringMap[correctedAnswers];
	}
}
