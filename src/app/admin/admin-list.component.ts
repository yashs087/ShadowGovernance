import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { AppComponent } from '../app.component';
import { IAdmin } from '../model/admin';
import { AdminService } from '../service/admin.service';
import { UpdateAdminComponent } from '../update-admin/update-admin.component';


@Component({
  selector:'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  
  filteredAdmins: IAdmin[]=[];
  sub!:Subscription;
  errorMessage:string='';
  
  constructor(private adminServie : AdminService,private dialog: MatDialog) {
    this.filteredAdmins = this.admins;
   }
  
  private _listFilter : string='';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        console.log("In Setter:",value);
        this.filteredAdmins = this.performFilter(value);
    }

    performFilter(filterBy : string): IAdmin[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.admins.filter((admin:IAdmin) => 
      admin.adminName.toLocaleLowerCase().includes(filterBy));
  }
    

  admins :IAdmin[]=[]

  getAdmin():void{
    this.sub = this.adminServie.getAdmins().subscribe({
      next:admins=>{
        this.admins=admins;
        this.filteredAdmins=this.admins;
      },
      error: err=>this.errorMessage=err
    });
  }
  tempAdmin!:IAdmin;
  getAdminById(id:number):void{
    this.adminServie.getAdminById(id).subscribe(
      data=>{
        console.log(data);
        this.tempAdmin=data;
      })
  }

  updateAdmin(id:number):void{
    this.getAdminById(id);
    this.dialog.open(UpdateAdminComponent, 
      {data:{admin:this.tempAdmin}});
    //this.adminServie.updateAdmin(admin).subscribe(data=>{console.log(data)})
  }

  deleteAdmin(id:number):void{
    this.adminServie.deleteAdmin(id).subscribe(data=>{console.log(data)})
  }

  openAddForm(){
    this.dialog.open(AddComponent)
  }
  
  ngOnInit(): void {

    this.getAdmin();

  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
}



}
