import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

export const authGuard: CanActivateFn = (route): Promise<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return new Promise(resolve => {
    authService.getMeValue().subscribe({
      next: (user: User | null) => {
        const requiredRole = route.data['role'] as 'user' | 'admin';
        if (user) {
          if (requiredRole && user.role !== requiredRole) {
            router.navigate(['/unauthorized']);
            resolve(false);
          }
          resolve(true);
        } else {
          router.navigate(['/login']);
          resolve(false);
        }
      },
      error: error => {
        console.error('Error occurred during canActivate:', error);
        router.navigate(['/login']);
        resolve(false);
      },
    });
  });
};
