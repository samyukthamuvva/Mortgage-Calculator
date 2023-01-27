import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mortgage-calculator',
    pathMatch: 'full',
  },
  {
    path: 'mortgage-calculator',
    loadChildren: () =>
      import('./mortgage-calculator/mortgage-calculator.module').then(
        (m) => m.MortgageCalculatorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
