import { Component, OnInit } from '@angular/core';

//Router
import { Router } from '@angular/router';

// Services
import { DataService } from '../../services/DataService/data.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizData;

  constructor( 
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getQuizData().subscribe( data => {
      this.quizData = data;
    });
  }

  getScore(){
	
	// let totalCorrect = this.quizData.questions.reduce((sum, item)=>{
	// 	if( item.seleceted == item.correct ){
	// 		console.log(item.selected, 'correct');
	// 		return sum + 1;
	// 	} else {
	// 		console.log('wrong')
	// 		return sum
	// 	}
	// }, 0);

	let totalCorrect = 0;
	this.quizData.questions.forEach(question => {
		if(question.selected == question.correct){
			totalCorrect += 1;
		}
	});

	console.log('You succeeded with ', totalCorrect, 'out of', this.quizData.questions.length);
	console.log('Your score is:', totalCorrect / this.quizData.questions.length * 100 );

	this.quizData.currentQuestion = 0;
	this.clearSelectedAnswers();
	alert('done');
	this.router.navigate(['/home']);
  }

  clearSelectedAnswers(){
	  this.quizData.questions.forEach(question => {
		  question.selected = null;
	  })
  }

}
