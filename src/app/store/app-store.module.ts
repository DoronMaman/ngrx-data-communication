import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { entityConfig } from './entity-metadata';
import {   NgrxDataModule } from 'ngrx-data';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}