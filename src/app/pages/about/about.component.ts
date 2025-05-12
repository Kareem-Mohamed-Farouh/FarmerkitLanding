import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LearnmoreComponent } from '../../shared/components/learnmore/learnmore.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-about',
  imports: [ButtonComponent, LearnmoreComponent, AnimateOnScrollModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
