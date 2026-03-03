import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/project.interface';

@Component({
  selector: 'app-skills-matrix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-matrix.component.html',
  styleUrl: './skills-matrix.component.css'
})
export class SkillsMatrixComponent {
  @Input() skills: Skill[] = [];
}
