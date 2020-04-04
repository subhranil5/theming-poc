import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemetwoComponent } from './themetwo/themetwo.component';
import {Routes,RouterModule} from '@angular/router';
import {LibraryModule} from '../library/library.module';

const routes:Routes=[
  {path:'',component:ThemetwoComponent}
]


@NgModule({
  declarations: [ThemetwoComponent],
  imports: [
    CommonModule,
    LibraryModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemeTwoTestModule { }
