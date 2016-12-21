import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'quiz-round-image',
  templateUrl: './quiz-round-image.component.html'
})
export class QuizRoundImageComponent implements OnInit {

  currentQuestion = 0;
  questions;
  roundName;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getRoundName();
  }

  private getRoundName() {
    this.activatedRoute.params.subscribe(
      param => {
        this.roundName = param['quizname'];
        this.questions = new RoundInfo().getImageRoundQuestions(this.roundName);
      }
    );
  }

  getCurrentImageUrl() {
    return `../../assets/${this.roundName}/${this.getCurrentQuestionName()}.jpg`;
  }

  getCurrentQuestionName() {
    return this.questions[this.currentQuestion].name;
  }

  getCurrentQuestionAnswer() {
    return this.questions[this.currentQuestion].answer;
  }

  getCurrentQuestionHint() {
    return this.questions[this.currentQuestion].hint;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  isCurrentQuestionSolvedBefore() {
    return this.questions[this.currentQuestion].solved;
  }

  currentQuestionSolved() {
    this.questions[this.currentQuestion].solved = true;
    if(this.allQuestionsSolved()){
      this.router.navigateByUrl("/" + this.roundName + "/solved")
    }
  }

  isSolved(index) {
    return this.questions[index].solved ? 'green' : 'grey';
  }

  goToQuestion(index) {
    this.currentQuestion = index;
  }

  private allQuestionsSolved() {
    return this.questions
        .filter(value => value.solved === false)
        .length === 0;
  }
}
