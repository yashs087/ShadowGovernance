import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../service/admin.service';
import { IReporter } from '../model/reporter';
import { MatDialog } from '@angular/material/dialog';
import { AddReporterComponent } from '../add-reporter/add-reporter.component';

@Component({
  selector: 'app-reporter-list',
  templateUrl: './reporter-list.component.html'
})
export class ReporterListComponent implements OnInit {
  errorMessage: string =" ";
  sub! : Subscription;
  private _listFilter : string='';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        console.log("In Setter:",value);
        this.filteredReporters = this.performFilter(value);
    }
  filteredReporters : IReporter[]=[];

  performFilter(filterBy : string): IReporter[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.reporters.filter((admin:IReporter) => 
    admin.reporterName.toLocaleLowerCase().includes(filterBy));
}

  constructor(private adminService: AdminService,private dialog: MatDialog) { 
    this.filteredReporters=this.reporters;
  }

  getReporters():void{
    this.sub=this.adminService.getReporters().subscribe({
      next:reporters => {
          this.reporters= reporters;
          this.filteredReporters = this.reporters;
      } ,
  error: err => this.errorMessage=err        });
  }

  addReporter(admin:IReporter):void{
    this.adminService.addReporter(admin).subscribe(data=>{console.log(data)})
  }

  updateReporter(admin:IReporter):void{
    this.adminService.updateReporter(admin).subscribe(data=>{console.log(data)})
  }

  deleteReporter(id:number):void{
    this.adminService.deleteReporter(id).subscribe(data=>{console.log(data)})
  }

  openAddForm(){
    this.dialog.open(AddReporterComponent)
  }
  ngOnInit():void {
    console.log("initiating")
    this.getReporters()
    
}

  ngOnDestroy():void{
    this.sub.unsubscribe();
}

  reporters :IReporter[]=[]

  
  

}
