import { ChangeDetectorRef, Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  allUser: any = Object;
  searchTerm: string = "";


  constructor( private commonservice: ApiService, private cdRef: ChangeDetectorRef){}
  
  ngOnInit(){
    this.getLatestEmployee()
  }

  getLatestEmployee() {
    this.commonservice.getEmployee().subscribe((response) => {
      this.allUser = response;
      this.cdRef.detectChanges();
    })
  }

  deleteEmployee(employee: any){
    this.commonservice.deleteUser(employee).subscribe(() => {
      console.warn("employee deleted");
      this.getLatestEmployee()
      
    })
  }

}
