import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-upload-customer-identity',
  templateUrl: './upload-customer-identity.component.html',
  styleUrls: ['./upload-customer-identity.component.css']
})
export class UploadCustomerIdentityComponent {

  customerId: number = 0;
  selectedFile: File | null = null;



     constructor(private service:Service){}
     

  /*uploadCustomerIdentity(customerId:number,file: FileList | null){
   
    console.log(file,customerId);
    this.service.uploadCustomerIdentity(file,customerId);

  }*/
  
  onSubmit() {
    if (this.selectedFile && this.customerId) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile);

      this.service.uploadCustomerIdentity(this.customerId, formData).subscribe(response => {
        // Handle response
        console.log('Upload successful:', response);
      });
    }


}


onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

}
