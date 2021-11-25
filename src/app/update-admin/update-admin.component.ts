import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IAdmin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  adminProfile="assets/profile.jpg";
  

  
  // updateAdmin(admin:IAdmin):void{
  //   this.adminService.updateAdmin(admin).subscribe(data=>{console.log(data)})
  // }

  onSubmit(form:NgForm){
    console.log(form.value);
    //this.updateAdmin(form.value);
    //this.dialogRef.close();
  }
    ngOnInit():void{
      

    }

}
