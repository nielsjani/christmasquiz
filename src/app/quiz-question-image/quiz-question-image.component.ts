import {Component, OnInit, Input, Output, SimpleChange, EventEmitter} from '@angular/core';

@Component({
  selector: 'quiz-question-image',
  templateUrl: './quiz-question-image.component.html'
})
export class QuizQuestionImageComponent implements OnInit {

  @Input()
  questionImage;
  @Input()
  solvedBefore;
  @Output()
  answeredCorrectly = new EventEmitter();
  isSolved = false;
  @Input()
  answer;
  resolution;

  constructor() {
  }

  ngOnInit() {
    this.isSolved = this.solvedBefore;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['questionImage']) {
      this.isSolved = this.solvedBefore;
    }
  }

  validateAnswer() {
    if (this.resolution && this.answer.indexOf(this.resolution.toLowerCase()) !== -1) {
      this.isSolved = true;
      this.answeredCorrectly.emit();
    }
    this.resolution = "";
  }

}
