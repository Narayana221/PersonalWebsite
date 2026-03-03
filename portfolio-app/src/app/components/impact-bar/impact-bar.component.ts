import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpactMetric } from '../../models/project.interface';

@Component({
  selector: 'app-impact-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact-bar.component.html',
  styleUrl: './impact-bar.component.css'
})
export class ImpactBarComponent {
  @Input() metrics: ImpactMetric[] = [];
}
