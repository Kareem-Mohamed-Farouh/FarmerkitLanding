import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakComponent } from './trak.component';

describe('TrakComponent', () => {
  let component: TrakComponent;
  let fixture: ComponentFixture<TrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
