import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AdminLoginComponent>) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.dialogRef.close();

}
}
