import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from '../../side-bar/side-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SideBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
