import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Added this

@Component({
  selector: 'app-genre-selector',
  standalone: true,
  imports: [CommonModule, FormsModule], // Added FormsModule here
  templateUrl: './genre-selector.component.html',
  styleUrl: './genre-selector.component.css'
})
export class GenreSelector {
  @Input() initialGenre: string = ''; 
  @Output() genreChange = new EventEmitter<string>();

  categories = [
    'Horror', 'Open World', 'Strategy', 'RPG', 
    'Simulation', 'Puzzle', 'Action', 'Survival', 
    'Platformer', 'Sports', 'Educational'
  ];

  // This now receives the string value directly from ngModelChange
  onSelect(value: string) {
    if (value) {
      this.genreChange.emit(value);
    }
  }
}