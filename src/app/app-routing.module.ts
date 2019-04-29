import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch: 'full'},
  {path: 'all', component: FeedComponent},
  {path: 'top', component: FeedComponent},
  {path: 'breaking', component: FeedComponent},
  {path: 'politics', component: FeedComponent},
  {path: 'economy', component: FeedComponent},
  {path: 'panorama', component: FeedComponent},
  {path: 'sports', component: FeedComponent},
  {path: 'culture', component: FeedComponent},
  {path: 'net', component: FeedComponent},
  {path: 'science', component: FeedComponent},
  {path: 'health', component: FeedComponent},
  {path: 'career', component: FeedComponent},
  {path: 'travel', component: FeedComponent},
  {path: 'cars', component: FeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  FeedComponent
];
