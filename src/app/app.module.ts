import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { CommunicationComponent } from './communication/communication.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  NgrxDataModule } from 'ngrx-data';
import { environment } from '../environments/environment';
import { entityConfig } from './store/entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes = [
  { path: 'test', component: CommunicationComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
