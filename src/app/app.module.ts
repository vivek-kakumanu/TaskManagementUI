import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SliderModule} from 'primeng/slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { FilterdataPipe } from './pipes/filterdata.pipe'; 
import { DatefilterPipe } from './pipes/datefilter.pipe';
import { PriorityfilterPipe } from './pipes/priorityfilter.pipe';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    FilterdataPipe, 
    DatefilterPipe,
    PriorityfilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,CalendarModule,
    NgbModule,FormsModule,
    AppRoutingModule,
    SliderModule,ReactiveFormsModule, NgxSpinnerModule,ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
