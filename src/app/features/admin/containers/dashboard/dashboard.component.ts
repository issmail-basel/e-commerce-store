import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'ecs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user$: Observable<User> = this.authService.getUserSubject();

  constructor(private authService: AuthService) {}
}
