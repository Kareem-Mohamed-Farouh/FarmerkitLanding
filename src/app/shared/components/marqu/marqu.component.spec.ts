import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquComponent } from './marqu.component';

describe('MarquComponent', () => {
  let component: MarquComponent;
  let fixture: ComponentFixture<MarquComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarquComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
