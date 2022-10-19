import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxTabPanelModule } from "devextreme-angular/ui/tab-panel"
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';
import { Test2Component } from './components/test2/test2.component';
import { Test1Component } from './components/test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxRadioGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
