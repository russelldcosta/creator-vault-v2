import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Required for the 'Get Started' link
import { Api } from '../../services/api';
import { Navbar } from '../../components/navbar/navbar'; // Path to your new component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar], // CommonModule allows @if and @for
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class App implements OnInit {
  // --- UI State Variables ---
  step: number = 0;
  category: string = "";
  currentYear: number = new Date().getFullYear();

  // --- Connection State Variables ---
  connectionMessage: string = 'Connecting to Vault...';

  constructor(
    private api: Api, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Run the handshake test when the app loads
    this.api.testConnection().subscribe({
      next: (data) => {
        console.log('Backend says:', data);
        this.connectionMessage = data;
        this.cdr.detectChanges(); // Force UI update
      },
      error: (err) => {
        console.error('Connection failed:', err);
        this.connectionMessage = 'Offline';
        this.cdr.detectChanges();
      }
    });
  }

  // --- UI Methods ---
  handleCategorySubmit() {
    if (this.category) {
      this.step = 2;
      this.cdr.detectChanges();
    }
  }
}