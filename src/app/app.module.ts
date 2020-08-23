import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExamInstructionComponent } from './exam-instruction/exam-instruction.component';
import { ExamContentComponent } from './exam-content/exam-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExamInstructionComponent,
    ExamContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
