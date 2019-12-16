import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizAppComponent } from './quiz.component';
import { QuizQuestionImageComponent } from './quiz-question-image/quiz-question-image.component';
import {RouterModule} from '@angular/router';
import {QuizAppRoutes} from "./app.routes";
import { QuizRoundImageComponent } from './quiz-round-image/quiz-round-image.component';
import {FormsModule} from "@angular/forms";
import { QuizRoundSolvedComponent } from './quiz-round-solved/quiz-round-solved.component';
import { QuizRoundOverviewComponent } from './quiz-round-overview/quiz-round-overview.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { QuizRoundQuestionComponent } from './quiz-round-question/quiz-round-question.component';
import { LoveLetterComponent } from './love-letter/love-letter.component';
import {QuizRoundCrosswordComponent} from "./quiz-round-crossword/quiz-round-crossword.component";
import {QuizRoundRodeDraadComponent} from "./quiz-round-rode-draad/quiz-round-rode-draad.component";
import { QuizRoundPuzzleComponent } from './quiz-round-puzzle/quiz-round-puzzle.component';

@NgModule({
  declarations: [
    QuizAppComponent,
    QuizQuestionImageComponent,
    QuizRoundImageComponent,
    QuizRoundSolvedComponent,
    QuizRoundOverviewComponent,
    QuizRoundQuestionComponent,
    QuizRoundCrosswordComponent,
    QuizRoundRodeDraadComponent,
    LoveLetterComponent,
    QuizRoundPuzzleComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(QuizAppRoutes),
    FormsModule,
  ],
  bootstrap: [QuizAppComponent]
})
export class QuizModule {

}
