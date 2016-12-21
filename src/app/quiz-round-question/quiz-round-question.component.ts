import {Component, OnInit} from '@angular/core';
import {RoundInfo} from "../shared/RoundInfo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'trm-quiz-round-question',
  templateUrl: './quiz-round-question.component.html'
})
export class QuizRoundQuestionComponent implements OnInit {

  vragen;
  guesses = [];
  private roundName;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => {
        this.roundName = param['quizname'];
        this.vragen = new RoundInfo().getClassicRoundQuestions(this.roundName);
      }
    );
  }

  backgroundColor(ind) {
    return ind % 2 === 0 ? "#9CB7B7" : "#1D7D7D";
  }

  textColor(ind) {
    return "white";
  }

  checkAnswer(ind) {
    if (this.guesses[ind] && this.vragen[ind].answer.indexOf(this.guesses[ind].toLowerCase()) !== -1) {
      this.vragen[ind].solved = true;
      if (this.allSolved()) {
        this.router.navigateByUrl("/" + this.roundName + "/solved")
      }
    }
  }

  private allSolved() {
    return this.vragen
        .filter(vraag => vraag.solved === false)
        .length === 0;
  }
}
