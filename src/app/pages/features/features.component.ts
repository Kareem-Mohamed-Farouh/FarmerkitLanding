import { Component } from '@angular/core';
import { LearnmoreComponent } from '../../shared/components/learnmore/learnmore.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-features',
  imports: [LearnmoreComponent, AnimateOnScrollModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  featurData = [
    {
      icon: './Icons4.png',
      title: 'Integration ecosystem',
      disc: 'Track your progress and motivateyour efforts everyday.',
    },
    {
      icon: './Icons3.png',
      title: 'Goal setting and tracking',
      disc: 'Set and track goals withmanageable task breakdowns.',
    },
    {
      icon: './Icons2.png',
      title: 'Secure data encryption',
      disc: 'Ensure your data’s safety with top-tier encryption.',
    },
    {
      icon: './Icons1.png',
      title: 'Customizable notifications',
      disc: 'Get alerts on tasks and deadlinesthat matter most.',
    },
  ];
}
