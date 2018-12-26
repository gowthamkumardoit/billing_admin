import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { DynamicControlsComponent } from './components/dynamic-controls/dynamic-controls.component';
import { ViewComponent } from './components/view/view.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PrintComponent } from './components/print/print.component';
import { PageInfoBarComponent } from './shared/page-info-bar/page-info-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserAvatarComponent } from './shared/user-avatar/user-avatar.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { BottomSheetComponent } from './shared/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LoginComponent,
    RegisterComponent,
    CreateUserComponent,
    AddSubscriptionComponent,
    DynamicControlsComponent,
    ViewComponent,
    PaymentsComponent,
    ReportsComponent,
    PrintComponent,
    PageInfoBarComponent,
    DashboardComponent,
    UserAvatarComponent,
    NotificationComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    BottomSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
