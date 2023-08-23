import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecs-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.scss'],
})
export class CategoriesSectionComponent {
  @Input() categories!: string[];
}
