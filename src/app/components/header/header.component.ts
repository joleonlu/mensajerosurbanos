import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() header: string = 'valor inicial';
  @Input() followers: string= 'valor secundario';
  isDarkMode = false;

  constructor(private themeService: ThemeService) { }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleDarkMode();
  }
}

