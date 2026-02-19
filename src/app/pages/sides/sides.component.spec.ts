import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesComponent } from './sides.component';

describe('SidesComponent', () => {
  let component: SidesComponent;
  let fixture: ComponentFixture<SidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
