import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchFormComponent } from './orch-form.component';

describe('OrchFormComponent', () => {
  let component: OrchFormComponent;
  let fixture: ComponentFixture<OrchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
