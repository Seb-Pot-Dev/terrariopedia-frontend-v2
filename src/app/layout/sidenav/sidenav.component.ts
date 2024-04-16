import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidebarVisible: boolean = false;

}
