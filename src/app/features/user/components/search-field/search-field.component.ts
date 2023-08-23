import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'ecs-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((event: InputEvent) => (event.target as HTMLInputElement).value)
      )
      .subscribe(query => {
        this.router.navigate(['/homepage'], { queryParams: { search: query } });
      });
  }
}
