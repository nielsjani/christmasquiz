import {Routes} from "@angular/router";
import {QuizRoundImageComponent} from "./quiz-round-image/quiz-round-image.component";
import {QuizRoundSolvedComponent} from "./quiz-round-solved/quiz-round-solved.component";
import {QuizRoundOverviewComponent} from "./quiz-round-overview/quiz-round-overview.component";

export const QuizAppRoutes: Routes = [
  {path:'', redirectTo: 'overview', pathMatch: 'full'},
  {path: 'overview', component: QuizRoundOverviewComponent},
  {path: ':quizname', component: QuizRoundImageComponent},
  {path: ':quizname/solved', component: QuizRoundSolvedComponent}
];
