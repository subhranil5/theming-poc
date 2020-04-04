import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeOneTestModule} from './theme-one-test/theme-one-test.module';
import {ThemeTwoTestModule} from './theme-two-test/theme-two-test.module';

const routes: Routes = [
  {path:'themeone',loadChildren:()=>ThemeOneTestModule},
  {path:'themetwo',loadChildren:()=>ThemeTwoTestModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
