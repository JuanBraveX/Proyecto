import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionClubComponent } from './presentacion-club.component';

describe('PresentacionClubComponent', () => {
  let component: PresentacionClubComponent;
  let fixture: ComponentFixture<PresentacionClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
