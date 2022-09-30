import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule {
}
