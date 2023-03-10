import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';


const DECLARATIONS = [
  CommonModule,
  ButtonModule,
  MenuModule,
  MessagesModule,
  DialogModule,
  InputTextModule,
  PasswordModule,
  AnimateModule,
  CardModule
]

@NgModule({
  declarations: [],
  imports: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ]
})
export class PrimengModule { }
