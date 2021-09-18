import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const nextPageTransition = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed',
        width: '100%',
        height: 'calc(100% - 3.4*16px)',
      }),
    ],
    { optional: true }
  ),
  query(':enter', [style({ right: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ right: '100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

const previousPageTransition = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed',
        width: '100%',
        height: 'calc(100% - 3.4*16px)',
      }),
    ],
    { optional: true }
  ),
  query(':enter', [style({ left: '-100%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => IntroductionPage', nextPageTransition),
  transition('IntroductionPage => RandomfactsPage', nextPageTransition),
  transition('RandomfactsPage => SkillsPage', nextPageTransition),
  transition('SkillsPage => LinksPage', nextPageTransition),
  transition('LinksPage => SkillsPage', previousPageTransition),
  transition('SkillsPage => RandomfactsPage', previousPageTransition),
  transition('RandomfactsPage => IntroductionPage', previousPageTransition),
  transition('IntroductionPage => HomePage', previousPageTransition),
]);
