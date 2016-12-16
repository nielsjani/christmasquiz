import {Routes} from "@angular/router";
import {QuizRoundImageComponent} from "./quiz-round-image/quiz-round-image.component";

export const QuizAppRoutes: Routes = [
  {path:'', redirectTo: 'xmasquiz/0', pathMatch: 'full'},
  {path: ':quizname/:question', component: QuizRoundImageComponent}
];
