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
    data: { animation: 'HomePage' },
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { animation: 'IntroductionPage' },
  },
  {
    path: 'randomfacts',
    component: RandomfactsComponent,
    data: { animation: 'RandomfactsPage' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'links',
    component: LinksComponent,
    data: { animation: 'LinksPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
