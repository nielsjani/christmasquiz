import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'quiz-round-image',
  templateUrl: './quiz-round-image.component.html'
})
export class QuizRoundImageComponent implements OnInit {

  currentQuestion = 0;
  // @Input()
  questions = [
    {name: "0", answer: "one", solved: false},
    {name: "1", answer: "toe", solved: false},
    {name: "2", answer: "trie", solved: false}
  ];
  roundName;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getRoundName();
  }

  private getRoundName() {
    this.activatedRoute.params.subscribe(
      param => this.roundName = param['quizname']
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
