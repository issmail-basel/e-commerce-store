import { Component, Input } from '@angular/core';

export type BreadcrumbItem = {
  url?: string;
  title: string;
};

@Component({
  selector: 'ecs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() breadcrumb!: BreadcrumbItem[];
}
