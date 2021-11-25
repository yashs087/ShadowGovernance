import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IReporter } from '../model/reporter';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-reporter',
  templateUrl: './add-reporter.component.html',
  styleUrls: ['./add-reporter.component.css']
})
export class AddReporterComponent implements OnInit {

  adminProfile="assets/profile.jpg";
  constructor(private adminService:AdminService,private dialogRef: MatDialogRef<AddReporterComponent>) { }

  addReporter(reporter:IReporter):void{
    this.adminService.addReporter(reporter).subscribe(data=>{console.log(data)});
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.addReporter(form.value);
    this.dialogRef.close();
  }
}
