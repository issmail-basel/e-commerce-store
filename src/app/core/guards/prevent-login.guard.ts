import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from '../models/User';

export const preventLoginGuard: CanActivateFn = (): Promise<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return new Promise(resolve => {
    authService.getMeValue().subscribe({
      next: (user: User | null) => {
        if (user) {
          router.navigate(['/']); // TODO: Redirect by role?
          resolve(false);
        } else {
          resolve(true);
        }
      },
      error: error => {
        console.error('Error occurred during canActivate:', error);
        resolve(true);
      },
    });
  });
};
