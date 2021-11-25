import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { ReporterLoginComponent } from '../reporter-login/reporter-login.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  imagePath : string="src/assets/profile.jpg"
  url : string =window.location.href;
  userUrl:string ='http://localhost:4200/user';
  baseUrl:string='http://localhost:4200/';
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
