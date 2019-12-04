import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
 
 


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  public headers = new HttpHeaders({'Content-Type': 'application/json'});
  public options = { headers: this.headers };

  constructor(private http: HttpClient,private toastr: ToastrService) {}

  public postTaskData(val): Observable<any> {
     
    return this.http.post(environment.baseURL + "/saveparenttaskdata", {
      task: val.task,
      parentTask: val.parentTask,
      priority:val.priority,
      startDate: val.startDate,
      endDate: val.endDate
    }, this.options)
    .pipe(tap((data) => {
       this.toastr.success("Data Saved Successfully !");
     
    }
    , (error) => {
       
     
    }))
  }


  public endTask(id): Observable<any> {
     
    return this.http.post(environment.baseURL + "/endtask", id, this.options)
    .pipe(tap((data) => {
      this.toastr.success("Task Ended Successfully !");
     
    }
    , (error) => {    
    }))
  }


  public getAllTask(): Observable<any> {
     return this.http.get(environment.baseURL + "/getalltask", this.options)
    .pipe(tap((data) => {
       
     
    }
    , (error) => {
       
     
    }))
  }
   
}
