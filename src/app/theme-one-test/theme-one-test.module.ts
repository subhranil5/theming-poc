import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeoneComponent } from './themeone/themeone.component';
import {Routes,RouterModule} from '@angular/router';
import {LibraryModule} from '../library/library.module';

const routes:Routes=[
  {path:'',component:ThemeoneComponent}
]


@NgModule({
  declarations: [ThemeoneComponent],
  imports: [
    CommonModule,
    LibraryModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemeOneTestModule { }
