import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;

    });
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}


