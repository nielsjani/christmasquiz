import { Component, OnInit } from '@angular/core';
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'trm-quiz-round-overview',
  templateUrl: './quiz-round-overview.component.html'
})
export class QuizRoundOverviewComponent implements OnInit {
  private imagerounds;
  private classicrounds;
  private crosswordrounds;
  private rodedraadrounds;

  constructor() { }

  ngOnInit() {
    this.imagerounds = new RoundInfo().getImageRoundNames();
    this.classicrounds = new RoundInfo().getClassicRoundNames();
    this.crosswordrounds = new RoundInfo().getCrosswordRoundNames();
    this.rodedraadrounds = new RoundInfo().getRodeDraadRoundNames();
  }

  getImageRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getImageRoundOmschrijving(rondeNaam);
  }

  getCrosswordRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getCrosswordRoundOmschrijving(rondeNaam);
  }

  getRodeDraadRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getRodeDraadRoundOmschrijving(rondeNaam);
  }

  getClassicRoundOmschrijving(rondeNaam) {
    return new RoundInfo().getClassicRoundOmschrijving(rondeNaam);
  }

  getRoundAvatar(round) {
    return `assets/${round}/avatar.jpg`;
  }

}
