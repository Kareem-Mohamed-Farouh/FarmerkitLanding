import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LearnmoreComponent } from '../../shared/components/learnmore/learnmore.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, LearnmoreComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
