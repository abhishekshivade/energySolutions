import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = ''
password: string = ''
selectedCompany: string = ''
companyList: string[] = ['Trishala','Shanti','F-31']

constructor(private authServices: AuthService,private dialogRef: MatDialogRef<LoginComponent>){}

login(): void{
  this.authServices.login(this.email,this.password,this.selectedCompany).subscribe(
    (response:any)=>{
      this.authServices.setLoggedInUser(response)
      console.log('response if login : ',response)

      this.dialogRef.close()
    },error=> console.error('Error during login : ',error)
  )
}
}
