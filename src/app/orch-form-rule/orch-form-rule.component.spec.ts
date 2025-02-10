import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchFormRuleComponent } from './orch-form-rule.component';

describe('OrchFormRuleComponent', () => {
  let component: OrchFormRuleComponent;
  let fixture: ComponentFixture<OrchFormRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchFormRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchFormRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
