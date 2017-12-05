import {Component, OnInit} from "@angular/core";
import {RoundInfo} from "../shared/RoundInfo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'quiz-round-crossword',
  templateUrl: './quiz-round-crossword.component.html'
})
export class QuizRoundCrosswordComponent implements OnInit {
  private questions: Array<any>;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getRoundName();
  }

  private getRoundName() {
    this.activatedRoute.params.subscribe(
      param => {
        this.questions = new RoundInfo().getCrosswordRoundQuestions(param['quizname']);
      }
    );
  }

  handleQuestionSolved($event) {
    this.questions[$event].solved = true;
  }

  getBlacksBefore(question) {
    let verticalWordIndex = this.getVerticalWordIndex();
    let questionVerticalWordtLetterIndex = question.verticalWordLetterIndex;
    // console.log(question);
    return new Array((verticalWordIndex - questionVerticalWordtLetterIndex)+1).fill(1);
  }

  getBlacksAfter(question) {
    let numberOfBlacksAfter = this.getCrosswordWidth() - (this.getBlacksBefore(question).length + this.getWhites(question).length);
    return new Array(numberOfBlacksAfter).fill(1);
  }

  getWhites(question) {
    let whites = question.answer[0].split("");
    whites[question.verticalWordLetterIndex] = "*";
    return whites;
  }

  private getVerticalWordIndex() {
    return Math.max.apply(null,this.questions.map(question => question.verticalWordLetterIndex));
  }

  private getCrosswordWidth() {
    return Math.max.apply(null,this.questions.map(question => question.answer[0].length +3));
  }

  getWhiteColor(white) {
    return white === "*" ? "yellow": "white";
  }

  getValue(question, index) {
    return question.solved ? question.answer[0][index] : "";
  }
}
