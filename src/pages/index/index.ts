import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule , Header],
  templateUrl:'./index.html',
  styleUrls: ['./index.scss']
})
export class IndexComponent {

  fullText: string = `const me = {
  name: "Sebastian Bermudez",
  role: "Frontend Developer",
  experience_years: 1,
  skills: ["Angular", "TypeScript", "SCSS", "Node.js"]
};`;

  displayText: string = "";
  index: number = 0;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.typeEffect();
    });
  }

  typeEffect() {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText[this.index];
      this.index++;

      setTimeout(() => this.typeEffect(), 20);
    }
  }
}
