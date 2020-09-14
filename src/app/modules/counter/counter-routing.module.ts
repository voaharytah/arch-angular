import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';

const routes: Routes = [{ path: '', component: CounterContainerComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
