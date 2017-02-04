import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
//import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';

import {} from 'hammer.js';
import { Md2Module } from 'md2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { GameSearchComponent } from './components/game-search/game-search.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { GameService, DefaultRequestOptions } from "./shared/game/game.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameSearchComponent,
    ConfirmModalComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    Md2Module.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [GameService, { provide: RequestOptions, useClass: DefaultRequestOptions} /*, Location, {provide: LocationStrategy, useClass: PathLocationStrategy}*/],
  bootstrap: [AppComponent]
})

export class AppModule {}
