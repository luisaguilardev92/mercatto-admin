import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TailadminSidebar } from '../tailadmin-sidebar/tailadmin-sidebar';
import { TailadminHeader } from '../tailadmin-header/tailadmin-header';

@Component({
  selector: 'app-tailadmin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TailadminSidebar, TailadminHeader],
  templateUrl: './tailadmin-layout.html',
  styleUrl: './tailadmin-layout.scss'
})
export class TailadminLayout {

}
