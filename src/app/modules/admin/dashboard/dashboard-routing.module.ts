import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashBoardComponent} from "./components/dash-board/dash-board.component";

const routes: Routes = [
    {
        path: '',
        component: DashBoardComponent,
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {
}
