import { Component, OnInit } from '@angular/core';
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'trm-quiz-round-overview',
  templateUrl: './quiz-round-overview.component.html'
})
export class QuizRoundOverviewComponent implements OnInit {
  private imagerounds;
  private classicrounds;

  constructor() { }

  ngOnInit() {
    this.imagerounds = new RoundInfo().getImageRoundNames();
    this.classicrounds = new RoundInfo().getClassicRoundNames();
  }

  getImageRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getImageRoundOmschrijving(rondeNaam);
  }

  getClassicRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getClassicRoundOmschrijving(rondeNaam);
  }

  getRoundAvatar(round) {
    return `../../assets/${round}/avatar.jpg`;
  }

}
