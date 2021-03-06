import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MaintenanceLoggingComponent } from './maintenance-logging/maintenance-logging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    NotificationsComponent,
    MaintenanceLoggingComponent,
    MainNavigationComponent,
    LeftNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
