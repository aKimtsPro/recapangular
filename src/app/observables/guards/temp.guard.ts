import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {ThermometreService} from "../service/thermometre.service";

export const tempGuard: CanActivateFn = (route, state) => {
  const tempService = inject(ThermometreService);
  return tempService.temperature >= 0;
}
