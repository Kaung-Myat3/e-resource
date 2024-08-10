import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  visible:boolean=true;
  changetype:boolean=true;
  users: User[] | undefined;

  viewpass(){
   this.visible = !this.visible
   this.changetype=!this.changetype
  }

  constructor(private userService: UserService){ }
  ngOnInit(): void {
      this.getUsers();
  }

  private getUsers(){
    this.userService.getUserLogin().subscribe(data =>{
      this.users=data;
    });
  }
}
