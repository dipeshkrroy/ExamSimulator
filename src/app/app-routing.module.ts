import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { ExamContentComponent } from './exam-content/exam-content.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'ExamInstruction', component:ExamInstructionComponent},
  {path:'ExamContent', component:ExamContentComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Home', component:HomeComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ExamInstructionComponent, ExamContentComponent, AdminComponent, HomeComponent]
