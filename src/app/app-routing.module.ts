import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReporterComponent } from './reporter/reporter.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'reporter',component:ReporterComponent},
  {path:'user',component:UserComponent},
  {path:'', redirectTo:'user',pathMatch:'full'},
  {path: '**', redirectTo: 'user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
