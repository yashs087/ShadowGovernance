import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavModule} from "src/app/nav/nav.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { ReporterListComponent } from './admin/reporter-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AdminListComponent } from './admin/admin-list.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ReporterComponent } from './reporter/reporter.component';
import { UserListComponent } from './reporter/user-list.component';
import { ReporterService } from './service/reporter.service';
import {MatDialogModule} from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from './service/user.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReporterLoginComponent } from './reporter-login/reporter-login.component';
import { AddComponent } from './add/add.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AddReporterComponent } from './add-reporter/add-reporter.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminListComponent,
    ReporterListComponent,
    ReporterComponent,
    UserListComponent,
    UserComponent,
    AdminLoginComponent,
    ReporterLoginComponent,
    AddComponent,
    UpdateAdminComponent,
    AddReporterComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NavModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    MatMenuModule,

  ],
  providers: [AdminService,ReporterService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
