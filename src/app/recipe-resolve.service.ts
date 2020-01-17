import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './data.service';

@Injectable()
export class RecipeResolveService implements Resolve<Recipe> {
  constructor(private dataService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("resolve", route.params.id);
    return route.params.id;
  }

}
