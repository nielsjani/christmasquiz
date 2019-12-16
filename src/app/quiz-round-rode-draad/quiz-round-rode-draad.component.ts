import {Component, OnInit} from '@angular/core';
import {RoundInfo} from "../shared/RoundInfo";
import {QuizRoundQuestionComponent} from "../quiz-round-question/quiz-round-question.component";

@Component({
  selector: 'trm-quiz-round-rode-draad',
  templateUrl: './quiz-round-rode-draad.component.html'
})
export class QuizRoundRodeDraadComponent extends QuizRoundQuestionComponent implements OnInit {

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => {
        this.roundName = param['quizname'];
        this.vragen = new RoundInfo().getRodeDraadRoundQuestions(this.roundName);
      }
    );
  }

  backgroundColor(ind): string {
    return ind === this.vragen.length -1 ? '#db3a31' : super.backgroundColor(ind);
  }
}
