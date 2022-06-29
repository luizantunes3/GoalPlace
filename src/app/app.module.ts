import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { NoMainBodyComponent } from './no-main-body/no-main-body.component';
import { MainPostboxComponent } from './main-postbox/main-postbox.component';
import { MainPostareaComponent } from './main-postarea/main-postarea.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent,
    MainMenuComponent,
    MainProfileComponent,
    NoMainBodyComponent,
    MainPostboxComponent,
    MainPostareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
