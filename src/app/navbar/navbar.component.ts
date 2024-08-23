import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Navbar template inline</h1>
                <p>Some paragraph here</p>
                <button>submit</button>`,
    
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})

export class AppNavbar {}