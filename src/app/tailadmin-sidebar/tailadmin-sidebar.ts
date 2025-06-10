import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tailadmin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './tailadmin-sidebar.html',
  styleUrl: './tailadmin-sidebar.scss'
})
export class TailadminSidebar {

}
