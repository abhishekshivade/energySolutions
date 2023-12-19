import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[]=[]
  displayedColumns: string[]=['userName','address','mobileNumber','email','password','companies','actions']

  constructor (private userService: UserService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe(data=>{this.users = data})
  }

  deleteUser(userId: string){
    const confirmDelete =confirm(`Are you sure want to delete this user?`)
    if(confirmDelete){
    this.userService.deleteUser(userId).subscribe(()=>this.getUsers(), error=> console.error('Error deleting user : ',error))}
  }

  openUserFormDialog(user?: User){
    const dialogRef = this.dialog.open(UserFormDialogComponent,{
      width:'400px',
      data: user || {}
    })

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if(user){
          this.userService.editUser({...user,...result}).subscribe(()=>this.getUsers())
        }else{
          this.userService.addUser(result).subscribe(()=>this.getUsers())
        }
      }
    })
  }

}
