import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { on } from 'process';

@Component({
  selector: 'app-exam-content',
  templateUrl: './exam-content.component.html',
  styleUrls: ['./exam-content.component.css']
})
export class ExamContentComponent implements OnInit {
  qn: number = 1;
  isChecked: boolean = false;
  btnDisabledNext: boolean;
  private isButtonVisible = false;
  qns: string;
  options=[];
  optionType: string;
  isNext:string = "Skip"
  Question = [
    {qns:"What is java", options:[" OOP1"," programming1"," Scripting1"," HTML1"],optType:"Radio", selection:[]},
    {qns:"What is Class", options:[" OOP2"," programming2"," Scripting2"," HTML2"], optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP3"," programming3"," Scripting3"," HTML3"," Extra"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP4"," programming4"," Scripting4"," HTML4"],optType:"Radio",selection:[]},
    {qns:"What is Class", options:[" OOP5"," programming5"," Scripting5"," HTML5"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP6"," programming6"," Scripting6"," HTML6"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP6"," programming6"," Scripting6"," HTML6"],optType:"Checkbox",selection:[]}
  ];
  secondsCounter = interval(1000);
  second: number = 60;
  minute:number =60;
  
  constructor() { }

  ngOnInit(): void {
    this.startTimer();
    this.qns=this.Question[0].qns;
    this.options=this.Question[0].options;
    this.optionType=this.Question[0].optType;
  }
  onNextClick(event){
    if(this.qn == this.Question.length ){
      this.isNext="submit";
    }
    if(this.qn <=this.Question.length-1){
      this.qn+=1;
      this.qns=this.Question[this.qn-1].qns;
      this.options=this.Question[this.qn-1].options;
      this.optionType=this.Question[this.qn-1].optType;
      this.isButtonVisible = true;
      this.isNext="Skip";
    }else{
      if(this.isNext=="submit"){
        this.onSubmit();
      }
    }
    
  }
  onPrevClick(event){
    console.log(this.btnDisabledNext);
    if(this.qn >= 2){
      this.qn-=1;
      this.qns=this.Question[this.qn-1].qns;
      this.options=this.Question[this.qn-1].options;
      this.optionType=this.Question[this.qn-1].optType;
    }else{
      if(this.qn == 1){
        this.isButtonVisible =false;
        console.log(this.Question);
      }
      
    }
    
  }
  onOptClick($event){
    this.isNext="Next";
    
  }
  onItemChange(value){
    let x:number=0;
    this.Question[this.qn-1].selection[x]=value;
    x+=1;
    console.log(" Value is : ", x );
    
 }
  startTimer(){
    this.secondsCounter.subscribe(n =>{
      this.second -=1;
      if(this.second == 0){
        this.second=60;
        this.minute -=1;
      }
    }); 
  }
  onSubmit(){
    console.log(this.Question);
  }

}
