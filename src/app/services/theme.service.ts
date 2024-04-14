import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeDark = false;

  toggleTheme(): void {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      // Vérifie l'attribut href actuel et bascule entre les thèmes
      themeLink.href = themeLink.href.includes('dark.css') ? 'light.css' : 'dark.css';
    } else {
      console.error('Theme link element not found!');
    }
  }
  
}
