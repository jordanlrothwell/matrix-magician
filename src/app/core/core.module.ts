import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { ShellComponent } from '../core/components/shell/shell.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ShellComponent
];

const modules = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [...components, NavbarComponent],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class CoreModule { }
