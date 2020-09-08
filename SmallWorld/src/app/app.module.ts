import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuInterceptor } from '../app/auth.interceptor'

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HostPersonalAreaComponent } from './host-personal-area/host-personal-area.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxDateRangeModule } from 'ngx-daterange';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    UploadPostComponent,
    HostPersonalAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    Ng5SliderModule,
    NgxDateRangeModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
