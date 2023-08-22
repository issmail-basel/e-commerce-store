import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecs-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() image!: string;
  @Input() link!: string;
}
