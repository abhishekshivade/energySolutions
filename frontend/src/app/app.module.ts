import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HttpClientModule }from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatSelectModule} from '@angular/material/select'
import {} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserListComponent,
    UserFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
