import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-types/MenuItem';

@Component({
  selector: 'app-menu-button',
  imports: [MatMenuModule, MatButton, CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css',
})
export class MenuButtonComponent {
  @Input() label: string = '';
  @Input() menuItems: MenuItem[] | undefined = [];
}
