import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/project.interface';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
