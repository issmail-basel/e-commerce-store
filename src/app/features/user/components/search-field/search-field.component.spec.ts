import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { SearchFieldComponent } from './search-field.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFieldComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update search query when input changes', fakeAsync(() => {
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;

    const navigateSpy = spyOn(component['router'], 'navigate');

    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    tick(300);

    expect(navigateSpy).toHaveBeenCalledWith(['/homepage'], {
      queryParams: { search: 'test' },
      queryParamsHandling: 'merge',
    });
  }));
});
