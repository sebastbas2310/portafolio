import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class IndexComponent {

  fullText: string = ` hq
    const me = {
        name: "Sebastian Bermudez",
        role: "Frontend Developer",
        experience_years: 1,
        skills: ["Angular", "TypeScript", "SCSS", "Node.js", Spring Boot"],
        hobbies: ["Gaming", "Reading", "Traveling"],
        contact: {}
        ;
   `;

  displayText: string = "";
  index: number = 0;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText[this.index];
      this.index++;

      setTimeout(() => this.typeEffect(), 20);
    }
  }
}
