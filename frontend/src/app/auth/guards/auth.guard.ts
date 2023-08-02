import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const currentUser = inject(UserService).currentUser;
  if (currentUser.token) return true;

  inject(Router).navigate(['/login'], {
    queryParams: { returnUrl: state.url },
  });
  return false;
};
