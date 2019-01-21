import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClient,HttpClientModule , HttpHeaders } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';

const appRoutes: Routes = [

];


@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
