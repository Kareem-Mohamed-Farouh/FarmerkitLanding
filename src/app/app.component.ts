import { providePrimeNG } from 'primeng/config';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { initFlowbite } from 'flowbite';
import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../app/core/flowbite.service';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesComponent } from './pages/features/features.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SliderComponent } from './shared/components/silder/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    NavbarComponent,
    AboutComponent,
    FeaturesComponent,
    CustomersComponent,
    UpdatesComponent,
    FooterComponent,
    SliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
