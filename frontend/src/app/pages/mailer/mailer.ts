import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenreSelector } from '../../components/genre-selector/genre-selector.component';

@Component({
  selector: 'app-mailer',
  standalone: true,
  imports: [CommonModule, FormsModule, GenreSelector],
  templateUrl: './mailer.html',
  styleUrl: './mailer.css'
})
export class Mailer implements OnInit {
  // State variables bound to the UI
  selectedGenre: string = '';
  mailSubject: string = '';
  mailBody: string = '';
  currentYear: number = new Date().getFullYear();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen for changes in the URL (e.g., ?genre=Strategy)
    this.route.queryParams.subscribe(params => {
      this.selectedGenre = params['genre'] || '';
      
      // Optional: Auto-fill subject if a genre is selected
      if (this.selectedGenre && !this.mailSubject) {
        this.mailSubject = `Collaboration for your ${this.selectedGenre} channel`;
      }
    });
  }

  /**
   * Updates the state when the user picks a new genre 
   * from the dropdown in the child component.
   */
  handleGenreChange(newGenre: string): void {
    this.selectedGenre = newGenre;
    console.log('Selected Genre updated to:', this.selectedGenre);
  }

  /**
   * Logic to handle the "Send Bulk Emails" action.
   * Currently logs to console; will eventually connect to your backend/API.
   */
  sendBulkEmails(): void {
    if (this.mailBody && this.mailSubject && this.selectedGenre) {
      const payload = {
        genre: this.selectedGenre,
        subject: this.mailSubject,
        body: this.mailBody
      };

      console.log('Preparing to send bulk emails...', payload);
      alert(`Preparing to send emails to the ${this.selectedGenre} vault!`);
      
      // Reset after send if desired
      // this.mailBody = '';
    }
  }
}