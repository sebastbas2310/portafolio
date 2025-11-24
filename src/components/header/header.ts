import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [CommonModule]
})
export class Header {

  @Output() onClose = new EventEmitter<void>();
  @Output() onMinimize = new EventEmitter<void>();
  @Output() onMaximize = new EventEmitter<void>();

  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  close() {
    this.onClose.emit();
  }

  minimize() {
    this.toggleMenu();
    this.onMinimize.emit();
  }

  maximize() {
    this.onMaximize.emit();
  }
}
