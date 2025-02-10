import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchFormRuleUpdateComponent } from './orch-form-rule-update.component';

describe('OrchFormRuleUpdateComponent', () => {
  let component: OrchFormRuleUpdateComponent;
  let fixture: ComponentFixture<OrchFormRuleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchFormRuleUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchFormRuleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
