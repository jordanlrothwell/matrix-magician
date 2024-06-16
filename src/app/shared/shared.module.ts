import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractionPipe } from './pipes/fraction.pipe';

const modules = [
  CommonModule
];

@NgModule({
  declarations: [FractionPipe],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    FractionPipe
  ]
})
export class SharedModule { }
