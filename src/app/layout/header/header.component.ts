import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, InputSwitchModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  check: boolean = true;

  toggleTheme() {
    this.themeService.toggleTheme();
}
}
