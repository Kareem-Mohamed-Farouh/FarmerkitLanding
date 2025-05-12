import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LearnmoreComponent } from '../../shared/components/learnmore/learnmore.component';

@Component({
  selector: 'app-about',
  imports: [ButtonComponent, LearnmoreComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
