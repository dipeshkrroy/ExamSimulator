import { Component, OnInit } from '@angular/core';
import {Question} from '../shared/question'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 nums =[];
 qnsLst = false;
 userLst = false;
 certLst = false;
 
 
 questionModel = new Question("Enter Your question here",["option"]);
  constructor() { }

  ngOnInit(): void {
    this.nums[0]= 1
    console.log(this.questionModel)
    //this.qnsLst = true;
  }
  AddOptions(num){
    this.nums[num]=num+1;
  }
  RemoveOptions(num){
    this.nums.splice(this.nums.indexOf(num), 1);
  }
  SubmitForm(){
    console.log(this.questionModel);
  }
  onQuestionClick(){
    
    this.qnsLst = true;
    this.userLst = false;
    this.certLst = false;
  }
  onUsersClick(){
    this.qnsLst = false;
    this.userLst = true;
    this.certLst = false;
  }
  onCertClick(){
    this.qnsLst = false;
    this.userLst = false;
    this.certLst = true;
  }
  

}
