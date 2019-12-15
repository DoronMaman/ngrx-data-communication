import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { CommunicationComponent } from './communication/communication.component';

const appRoutes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  
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
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
