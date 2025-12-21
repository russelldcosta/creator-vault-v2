import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for showing data
import { Api } from './services/api'; // Your renamed class

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  connectionMessage: string = 'Connecting to Vault...';

// 2. Add 'cdr' to the constructor
  constructor(private api: Api, private cdr: ChangeDetectorRef) {}



ngOnInit() {
    this.api.testConnection().subscribe({
      next: (data) => {
        console.log('Backend says:', data);
        this.connectionMessage = data;
        
        // 3. Force the UI to refresh
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        this.connectionMessage = 'Connection Failed.';
        this.cdr.detectChanges();
      }
    });
  }


}