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

  public files  : any[];
  isHTML5 = true;
  
  constructor() {
    this.files = new Array();
   }

  ngOnInit() {
   
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;  };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      
         console.log('ImageUpload:uploaded:', item, status, response);
          if(status == "200"){
            console.log("GOT IT")
          }
          else{
            var fileError = {status : "fail",fileName : item.fileName};
            this.files.push(fileError);
          }
        // this.files.push(item);
     };
     this.uploader.onCompleteAll = function compleate(){

      console.log("compleated!!!@!#@#$%");
      console.log(this.files);
      this.files.forEach(element => {
        
        console.log(element);
      });

     };

  }

  

}
