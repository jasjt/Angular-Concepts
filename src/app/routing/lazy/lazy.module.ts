import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { lazyRoutes } from './lazy.routes';

@NgModule({
  imports: [RouterModule.forChild(lazyRoutes)],
  exports: [RouterModule],
})
export class LazyModule {}
