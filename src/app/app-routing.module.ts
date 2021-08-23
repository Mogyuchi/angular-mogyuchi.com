import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LinksComponent } from './links/links.component';
import { RandomfactsComponent } from './randomfacts/randomfacts.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'randomfacts',
    component: RandomfactsComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
