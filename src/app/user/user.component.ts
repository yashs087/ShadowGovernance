import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IAdmin } from '../model/admin';
import { AdminService } from '../service/admin.service';
import { ReporterService } from '../service/reporter.service';
import { IUser } from '../model/user';
import { NgIf } from '@angular/common';
import { UserService } from '../service/user.service';

// import { Subscription } from 'rxjs';
// import { IUser } from '../user';
// import { UserService } from './user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  router: any;
  // sub!:Subscription;
  // errorMessage:string='';
  // tempUser: IUser={
  //   name: 'Gargi',
  //   capgeminiId: 111,
  //   capgeminiEmail: 'gargi@capg.in',
  //   BU: 'Mumbai',
  //   shadowProjectName: 'Git',
  //   shadowProjectMentor: 'Ram',
  //   taskDescription: 'Testing'

  // }
  constructor(private reporterService: ReporterService, private adminService: AdminService, private userService:UserService){}
  title(title: any) {
  //   throw new Error('Method not implemented.');
  }
  //tempUser!:IUser;
    tname:string='';
    tcapgeminiEmail:string='';
    tbu:string='';
    tshadowProjectName:string='';
    tshadowProjectMentor:string='';
  topics = ['Mumbai', 'Europe', 'Banglore' ,'Pune'];
  descriptions = ['Observing the Development Process', 'Review of code which was already written', 'Writing Test Cases/Automation Test Cases' ,'Unit Testing Application' , 'Creating documentation', 'Any Other'];
  private _capgeminiId!:number;
  set capgeminiId(value:number){
    this._capgeminiId=value;
    //console.log(value);
   this.getUserById(value);

  }
  get capgeminiId():number{
    return this._capgeminiId;
  }
  description:string='';
  dis:boolean=false;
  toggle:boolean=false;
  sub!:Subscription;
  errorMessage:string='';
  admins :IAdmin[]=[];
  
  getAdmin():void{
    this.sub = this.adminService.getAdmins().subscribe({
      next:admins=>{
        this.admins=admins;
        
      },
      error: err=>this.errorMessage=err
    });
  }
  
  

  addUsers(user:IUser){
    this.reporterService.addUsers(user).subscribe(
      data=>{console.log(data)
    }
    )
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.addUsers(form.value);

  }

  
    
    

  getUserById(id:number):void{
    console.log('working');
    this.userService.getUserById(id).subscribe(
      data=>{
        
        
        //this.tempUser=data;
        this.tname=data.name;
        this.tcapgeminiEmail=data.capgeminiEmail;
        this.tbu=data.BU;
        this.tshadowProjectName=data.shadowProjectName;
        this.tshadowProjectMentor=data.shadowProjectMentor;
        this.description=data.taskDescription;
        
      })

  }

  toggleText():boolean{
    console.log(this.description);
    if(this.description==='Any Other'){
    return true;}
    else{
      return false;
    }
  }

  
//   ngOnInit(): void{
//     this.sub = this.userService.postUser(this.tempUser).subscribe({
//       next:users=>{
//         console.log(users)
//       },
//       error: err=>this.errorMessage=err
//     });
// }

  // showTextBox:boolean=false;
  // show():void{
  //   this.showTextBox=true;
  //   console.log(this.showTextBox+"other is selected");
  }





