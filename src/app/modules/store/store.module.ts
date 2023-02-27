import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { STORE, STORE_EFFECTS } from 'src/app/ngrx/store/store';
import { EffectsModule } from '@ngrx/effects';

const DECLARATIONS = [
  CommonModule,
  StoreModule.forRoot(STORE, {}),
  EffectsModule.forRoot(STORE_EFFECTS),
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
  }),
]

@NgModule({
  declarations: [],
  imports: [
    ...DECLARATIONS
  ]
})
export class StoreNGRXModule { }
