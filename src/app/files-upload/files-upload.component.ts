import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


const URL = 'http://localhost:3000/drive/uploadFile';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css'],
  providers : []
})
export class FilesUploadComponent implements OnInit {

  public static uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

   static filesQ  : any [] = [];
  isHTML5 = true;
  static compleateUploadSucsess = false;
  
  constructor() {
    
   }

   get compleateUploadSucsess(){
     return FilesUploadComponent.compleateUploadSucsess;
   }
   get FilesQ(){
     return FilesUploadComponent.filesQ;
   }
   get uploader(){
    return FilesUploadComponent.uploader;
  }

  ngOnInit() {
   
    FilesUploadComponent.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;
      FilesUploadComponent.filesQ=[]};
 
    FilesUploadComponent.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {


      
         console.log('ImageUpload:uploaded:', item, status, response);
          if(status == "200"){
            console.log("GOT IT")
          }
          else{
            var fileError = {status : "fail",fileName : item.file.name};
            FilesUploadComponent.filesQ.push(fileError);
            
          }
        // this.files.push(item);
     };
     FilesUploadComponent.uploader.onCompleteAll = function compleate(){

      if(FilesUploadComponent.filesQ.length>0){
        console.log("asdf");
         FilesUploadComponent.uploader.clearQueue();
         FilesUploadComponent.compleateUploadSucsess=false;
      
      }
      else{
        //success All no fail Files
        FilesUploadComponent.compleateUploadSucsess=true;

      }
     };
     

     
  }

  

}
