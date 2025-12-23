import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedGenre: string = '';
  mailBody: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // This watches the URL. If it changes from ?genre=Horror to ?genre=RPG, 
    // the page updates without a reload.
    this.route.queryParams.subscribe(params => {
      this.selectedGenre = params['genre'] || '';
    });
  }

  handleGenreChange(newGenre: string) {
    // When dropdown changes, update the URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { genre: newGenre },
      queryParamsHandling: 'merge'
    });
  }

  sendBulkEmails() {
    console.log(`Sending to ${this.selectedGenre} creators:`, this.mailBody);
    alert('Emails queued for delivery!');
  }
}