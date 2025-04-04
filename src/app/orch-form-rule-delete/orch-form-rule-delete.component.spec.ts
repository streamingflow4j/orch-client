import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchFormRuleDeleteComponent } from './orch-form-rule-delete.component';
import { provideHttpClient } from '@angular/common/http';

describe('OrchFormRuleDeleteComponent', () => {
  let component: OrchFormRuleDeleteComponent;
  let fixture: ComponentFixture<OrchFormRuleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchFormRuleDeleteComponent], providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrchFormRuleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
