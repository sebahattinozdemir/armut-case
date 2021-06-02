import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { TypeId5Component } from './services/components/type-id5/type-id5.component';
import { TypeId4Component } from './services/components/type-id4/type-id4.component';
import { TypeId6Component } from './services/components/type-id6/type-id6.component';
import { TypeId13Component } from './services/components/type-id13/type-id13.component';
import { TypeId8Component } from './services/components/type-id8/type-id8.component';
import { TypeId9Component } from './services/components/type-id9/type-id9.component';
import { TypeId11Component } from './services/components/type-id11/type-id11.component';
import { ServicesService } from './services/services.service';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    TypeId5Component,
    TypeId4Component,
    TypeId6Component,
    TypeId13Component,
    TypeId8Component,
    TypeId9Component,
    TypeId11Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
