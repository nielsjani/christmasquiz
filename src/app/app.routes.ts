import {Routes} from "@angular/router";
import {QuizRoundImageComponent} from "./quiz-round-image/quiz-round-image.component";
import {QuizRoundSolvedComponent} from "./quiz-round-solved/quiz-round-solved.component";

export const QuizAppRoutes: Routes = [
  {path:'', redirectTo: 'xmasquiz', pathMatch: 'full'},
  {path: ':quizname', component: QuizRoundImageComponent},
  {path: ':quizname/solved', component: QuizRoundSolvedComponent}
];
