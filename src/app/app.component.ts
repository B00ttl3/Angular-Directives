import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'
  
  isLoggedIn: boolean = false;
  userName: string = 'Umair Munir';

  loginCount: number = 0;


  countLoginAttempts(){
    this.loginCount ++;
    console.log(this.loginCount);
  }

  userRole: string = "Member"


  users: Array<string> = ['Umair' , 'Munir' , 'Anything' , 'Works'];

  usersObj: Array<any> = [
    { id: 1, name: 'Umair', email: 'mumair3825@gmail.com' },
    { id: 2, name: 'Some', email: 'some@gmail.com' },
    { id: 3, name: 'Thing', email: 'thing@gmail.com' },
    { id: 4, name: 'New', email: 'new@gmail.com' },
  ]

  addNewUser() {
    let user = {id: 5 , name: 'user 1' , email: 'user1@gmail.com'};
    this.usersObj.push(user);
  }

  // onDelete(user:object) {
  //  let index = this.usersObj.indexOf(user);
  //  this.usersObj.splice(index, 1);
  // }

  onDelete(index:number) {
    this.usersObj.splice(index, 1);
   }

}
