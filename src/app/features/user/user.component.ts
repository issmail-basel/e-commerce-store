import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'ecs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user$: Observable<User> = this.authService.getUserSubject();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
