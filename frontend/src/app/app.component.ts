import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Required for page swapping
import { Navbar } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, FooterComponent], // These MUST be here
  templateUrl: './app.component.html', // Point this to your new file
})
export class AppComponent {
  // Logic for the root of your app
}