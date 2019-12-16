import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoundInfo} from "../shared/RoundInfo";

@Component({
  selector: 'trm-quiz-round-puzzle',
  templateUrl: './quiz-round-puzzle.component.html',
  styleUrls: ['./quiz-round-puzzle.component.css']
})
export class QuizRoundPuzzleComponent implements OnInit {

  roundName;
  activatedRoute: ActivatedRoute;
  router: Router;
  private puzzleRound: any;
  private keywords: string[][];
  currentGuess: string;
  correctAnswers: string[] = [];

  constructor(activatedRoute: ActivatedRoute, router: Router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      param => {
        this.roundName = param['quizname'];
        this.puzzleRound = new RoundInfo().getPuzzleRound(this.roundName);
        this.keywords = this.chunkArray(this.shuffleArray(this.mapToKeywords()))
      }
    );
  }

  private mapToKeywords() {
    return this.puzzleRound.questions.map(question => question.keywords)
      .flatMap(x => x);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  chunkArray(myArray) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    var chunk;

    for (index = 0; index < arrayLength; index += 4) {
      chunk = myArray.slice(index, index + 4);
      tempArray.push(chunk);
    }

    return tempArray;
  }

  checkAnswer() {
    if (this.isAnswerCorrect()) {
      const questionCorrectlyAnswered = this.puzzleRound.questions[this.getCorrectAnswerIndex()];
      this.removeKeywords(questionCorrectlyAnswered.keywords);
      this.correctAnswers.push(questionCorrectlyAnswered.answer);
      this.puzzleRound.questions.splice(this.getCorrectAnswerIndex(), 1);
    }
    this.currentGuess = '';
    if(this.correctAnswers.length === 4) {
      this.router.navigateByUrl("/" + this.roundName + "/solved")
    }
  }

  private isAnswerCorrect() {
    return this.getCorrectAnswerIndex() > -1;
  }

  private getCorrectAnswerIndex() {
    return this.puzzleRound.questions.map(q => q.answer).indexOf(this.currentGuess.toLowerCase());
  }

  private removeKeywords(keywordsToRemove: string[]) {
    keywordsToRemove.forEach(keywordToRemove => {
      this.keywords.forEach(keywordGroup => {
        let indexOfKeywordToRemove = keywordGroup.indexOf(keywordToRemove);
        if(indexOfKeywordToRemove > -1) {
          keywordGroup[indexOfKeywordToRemove] = '-';
        }
      })
    })
  }
}
