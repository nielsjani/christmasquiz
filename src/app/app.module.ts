import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizAppComponent } from './quiz.component';
import { QuizQuestionImageComponent } from './quiz-question-image/quiz-question-image.component';
import {RouterModule} from '@angular/router';
import {QuizAppRoutes} from "./app.routes";
import { QuizRoundImageComponent } from './quiz-round-image/quiz-round-image.component';


@NgModule({
  declarations: [
    QuizAppComponent,
    QuizQuestionImageComponent,
    QuizRoundImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(QuizAppRoutes)
  ],
  bootstrap: [QuizAppComponent]
})
export class QuizModule {

}
