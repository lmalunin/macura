import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacuraLibComponent } from './macura-lib.component';

describe('MacuraLibComponent', () => {
  let component: MacuraLibComponent;
  let fixture: ComponentFixture<MacuraLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacuraLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacuraLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
