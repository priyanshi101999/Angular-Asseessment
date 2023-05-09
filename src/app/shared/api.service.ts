import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllUser() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  

  createEmployee(user: any) {
    return this.http.post("http://localhost:3000/posts" , user);
    
  }

  getEmployee(){
    return this.http.get("http://localhost:3000/posts" );
  }
  updateEmployee(){}

  deleteUser(employee: any){
    return this.http.delete("http://localhost:3000/posts/"  +employee.id);
  }
}


