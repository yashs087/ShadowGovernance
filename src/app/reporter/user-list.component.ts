import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReporterService } from '../service/reporter.service';
import { IUser } from '../model/user';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {


  topics = ['Mumbai', 'Europe', 'Banglore' ,'Pune'];
  descriptions = ['Observing the Development Process', 'Review of code which was already written', 'Writing Test Cases/Automation Test Cases' ,'Unit Testing Application' , 'Creating documentation', 'Any Other'];
  users:IUser[]=[];
  title='Data'
  fileName='UserData.xlsx'
  filteredUser:IUser[]=[];
  sub!:Subscription;
  errorMessage:string='';
  
  private _listFilter : string='';
  get listFilter():string{
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter=value;
      console.log("In Setter:",value);
      this.filteredUser = this.performFilter(value);
  }

  performFilter(filterBy : string): IUser[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredUser.filter((user:IUser) => 
    user.name.toLocaleLowerCase().includes(filterBy));
}
  
private _buListFilter : string='';
  get buListFilter():string{
      return this._listFilter;
  }
  set buListFilter(value: string){
      this._listFilter=value;
      console.log("In Setter:",value);
      this.filteredUser = this.performBuFilter(value);
  }

  performBuFilter(filterBy : string): IUser[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredUser.filter((user:IUser) => 
    user.BU.toLocaleLowerCase().includes(filterBy));
}
resetFilter():void{
  this.filteredUser=this.users;
}
private _descListFilter : string='';
  get descListFilter():string{
      return this._listFilter;
  }
  set descListFilter(value: string){
      this._listFilter=value;
      console.log("In Setter:",value);
      this.filteredUser = this.performDescFilter(value);
  }

  performDescFilter(filterBy : string): IUser[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredUser.filter((user:IUser) => 
    user.taskDescription.toLocaleLowerCase().includes(filterBy));
}

    exportExcel():void{
      const ws :XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.filteredUser);
      const wb :XLSX.WorkBook=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'users');
      XLSX.writeFile(wb, this.fileName);
    }
  constructor(private reporterService:ReporterService) { }
  getUsers():void{
    this.sub = this.reporterService.getUsers().subscribe({
      next:users=>{
        this.users=users;
        this.filteredUser=this.users;
      },
      error: err=>this.errorMessage=err
    });
  }

  addUsers(user:IUser){
    this.reporterService.addUsers(user).subscribe(
      data=>{console.log(data)
      this.getUsers();
    }
    )
  }

  ngOnInit(): void {

    this.sub = this.reporterService.getUsers().subscribe({
      next:users=>{
        this.users=users;
        this.filteredUser=this.users;
      },
      error: err=>this.errorMessage=err
    });

  }

}
