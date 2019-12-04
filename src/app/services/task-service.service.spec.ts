import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskServiceService } from './task-service.service';
 

 


describe('TaskService', () => {
  let service: TaskServiceService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskServiceService ],
      imports: [ HttpClientModule, HttpClientTestingModule ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(TaskServiceService);
    backend = TestBed.get(HttpTestingController);
  })

  it('should be created', inject([TaskServiceService], (service: TaskServiceService) => {
    expect(service).toBeTruthy();
  }));

  
      
   
});
