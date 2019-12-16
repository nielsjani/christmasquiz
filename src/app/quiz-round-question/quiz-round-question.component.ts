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
  roundName;
  activatedRoute: ActivatedRoute;
  router: Router;

  constructor(activatedRoute: ActivatedRoute, router: Router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => {
        this.roundName = param['quizname'];
        this.vragen = new RoundInfo().getClassicRoundQuestions(this.roundName);
      }
    );
  }

  backgroundColor(ind): string {
    return ind % 2 === 0 ? "#9CB7B7" : "#1D7D7D";
  }

  textColor(ind) {
    return "white";
  }

  checkAnswer(ind) {
    if (this.guesses[ind] && this.vragen[ind].answer.map(vraag => vraag.toLowerCase()).indexOf(this.guesses[ind].toLowerCase()) !== -1) {
      this.vragen[ind].solved = true;
      if (this.allSolved()) {
        this.router.navigateByUrl("/" + this.roundName + "/solved")
      }
    }
  }

  protected allSolved() {
    return this.vragen
        .filter(vraag => vraag.solved === false)
        .length === 0;
  }
}
