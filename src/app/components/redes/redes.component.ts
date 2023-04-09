import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent {
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
