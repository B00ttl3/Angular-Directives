import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  imgURL: string = 'https://i5.walmartimages.com/seo/HP-Stream-14-Laptop-Intel-Celeron-N4000-4GB-SDRAM-32GB-eMMC-Office-365-1-yr-Royal-Blue_4f941fe6-0cf3-42af-a06c-7532138492fc_2.cb8e85270e731cb1ef85d431e49f0bf2.jpeg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruiteName: string = 'apple';

  userName: string = 'Umair Munir'

  buttonClick() {
    alert("button clicked");
  }

  keyEnter(event:any){
    // console.log(event.keyCode)
    if(event.keyCode == 13){
      console.log('Ente Key Pressed');
    }
  }

  keyupFiltering(user:HTMLInputElement) {
    console.log(user.value);
  }

  updateUserName(username:HTMLInputElement){
    this.userName = username.value;
    console.log(this.userName);
  }
}
