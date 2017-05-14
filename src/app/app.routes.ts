import {Routes} from "@angular/router";
import {QuizRoundImageComponent} from "./quiz-round-image/quiz-round-image.component";
import {QuizRoundSolvedComponent} from "./quiz-round-solved/quiz-round-solved.component";
import {QuizRoundOverviewComponent} from "./quiz-round-overview/quiz-round-overview.component";
import {QuizRoundQuestionComponent} from "./quiz-round-question/quiz-round-question.component";
import {LoveLetterComponent} from "./love-letter/love-letter.component";

export const QuizAppRoutes: Routes = [
  {path:'', redirectTo: 'overview', pathMatch: 'full'},
  {path: 'overview', component: QuizRoundOverviewComponent},
  {path: 'image/:quizname', component: QuizRoundImageComponent},
  {path: 'classic/:quizname', component: QuizRoundQuestionComponent},
  {path: ':quizname/solved', component: QuizRoundSolvedComponent},
  {path: 'loveletter', component: LoveLetterComponent}
];
