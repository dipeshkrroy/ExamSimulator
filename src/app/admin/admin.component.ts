import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
 closeResult = '';
 
 
 questionModel = new Question("Enter Your question here",["option"]);
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.nums[0]= 1
    console.log(this.questionModel)
    this.qnsLst = true;
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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

}
