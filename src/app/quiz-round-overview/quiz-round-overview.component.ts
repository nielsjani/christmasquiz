import { Component, OnInit } from '@angular/core';
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'trm-quiz-round-overview',
  templateUrl: './quiz-round-overview.component.html'
})
export class QuizRoundOverviewComponent implements OnInit {
  private rounds;

  constructor() { }

  ngOnInit() {
    this.rounds = new RoundInfo().getRoundNames();
  }

  getOmschrijving(rondeNaam) {
    return new RoundInfo().getImageRoundOmschrijving(rondeNaam);
  }

  getRoundAvatar(round) {
    return `../../assets/${round}/avatar.jpg`;
  }

}
