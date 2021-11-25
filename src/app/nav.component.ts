import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReporterLoginComponent } from './reporter-login/reporter-login.component';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
onCreate(){
this.dialog.open(AdminLoginComponent);
}
onPress(){
  this.dialog.open(ReporterLoginComponent);
  }
}
