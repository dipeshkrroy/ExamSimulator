import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { ExamContentComponent } from './exam-content/exam-content.component';

const routes: Routes = [
  {path:'ExamInstruction', component:ExamInstructionComponent},
  {path:'ExamContent', component:ExamContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ExamInstructionComponent, ExamContentComponent]
