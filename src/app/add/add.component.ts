import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminListComponent } from '../admin/admin-list.component';
import { IAdmin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  adminProfile="assets/profile.jpg";
  constructor(private adminService:AdminService,private dialogRef: MatDialogRef<AddComponent>) { }
  addAdmin(admin:IAdmin):void{
    this.adminService.postAdmin(admin).subscribe(data=>{console.log(data)})
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.addAdmin(form.value);
    this.dialogRef.close();

}
}


