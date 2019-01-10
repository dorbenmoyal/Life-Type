import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/drive/uploadFile';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  files  : any[] =[];
  isHTML5 = true;
  
  constructor() { }

  ngOnInit() {
   
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;  };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      
         console.log('ImageUpload:uploaded:', item, status, response);
         this.files.push(item);
     };
     this.uploader.onCompleteAll = function compleate(){

      console.log("compleated!!!@!#@#$%");

     };

  }

  

}
