import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'trm-quiz-round-solved',
  templateUrl: './quiz-round-solved.component.html'
})
export class QuizRoundSolvedComponent implements OnInit {

  roundName;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRoundName();
  }

  private getRoundName() {
    this.activatedRoute.params.subscribe(
      param => this.roundName = param['quizname']
    );
  }

  getRoundSolvedImage() {
    return `../../assets/${this.roundName}/winner.jpg`
  }

  getWinnerText() {
    return new RoundInfo().getImageRoundWinnerText(this.roundName);
  }

}
