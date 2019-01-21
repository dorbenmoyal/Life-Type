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

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

   static filesQ  : any [] = [];
  isHTML5 = true;
  static compleateUpload = false;
  
  constructor() {
    
   }

   get FilesQ(){
     return FilesUploadComponent.filesQ;
   }

  ngOnInit() {
   
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;  };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

      FilesUploadComponent.compleateUpload = false;
      
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
     this.uploader.onCompleteAll = function compleate(){

      FilesUploadComponent.filesQ.forEach(element => {
        FilesUploadComponent.compleateUpload = true;

        console.log(element);
      });
     };

     
 

  }

  

}
