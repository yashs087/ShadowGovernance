import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reporter-login',
  templateUrl: './reporter-login.component.html',
  styleUrls: ['./reporter-login.component.css']
})
export class ReporterLoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ReporterLoginComponent>) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.dialogRef.close();
}

}
