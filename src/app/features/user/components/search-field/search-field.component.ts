import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ecs-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    const searchQueryParam = this.route.snapshot.queryParams['search'];
    console.log(searchQueryParam);

    if (searchQueryParam) {
      this.searchInput.nativeElement.value = searchQueryParam;
    }

    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((event: InputEvent) => (event.target as HTMLInputElement).value)
      )
      .subscribe(query => {
        this.router.navigate(['/homepage'], {
          queryParams: { search: query },
          queryParamsHandling: 'merge',
        });
      });
  }
}
