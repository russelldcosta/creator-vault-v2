import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© {{ currentYear }} Creator Vault. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 40px 0;
      text-align: center;
      font-size: 13px;
      color: #aeaeaeff;
      border-top: 1px solid #f9f9f9;
      background: #101010ff;
      font-family: 'FOT-Rodin-Pro', sans-serif;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}