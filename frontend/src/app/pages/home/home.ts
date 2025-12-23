import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Only need Router for navigation
import { Api } from '../../services/api';
import { GenreSelector } from '../../components/genre-selector/genre-selector.component';

@Component({
  selector: 'app-home', // 2. Renamed to match its purpose
  standalone: true,
  imports: [CommonModule, GenreSelector], // CommonModule is good practice
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit { // 3. Renamed class
  // --- UI State Variables ---
  showSearch = false; 
  categories = ['Horror', 'Open World', 'Strategy', 'RPG', 'Simulation'];
  currentYear: number = new Date().getFullYear();
  
  // --- Connection State Variables ---
  connectionMessage: string = 'Connecting to Vault...';

  constructor(
    private api: Api, 
    private cdr: ChangeDetectorRef,
    private router: Router 
  ) {}

  ngOnInit() {
    this.api.testConnection().subscribe({
      next: (data) => {
        this.connectionMessage = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        this.connectionMessage = 'Offline';
        this.cdr.detectChanges();
      }
    });
  }

  onGetStarted() {
    this.showSearch = true; 
    this.cdr.detectChanges(); // Ensure the UI swaps the button for the search bar
  }

onCategorySelect(genre: string) { // It's receiving a string now!
  console.log('Navigating with genre:', genre);
  this.router.navigate(['/mailer'], { queryParams: { genre: genre } });
}
}