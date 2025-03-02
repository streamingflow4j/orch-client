import { Component, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Entity } from '../model/entity';
import { Attributes } from '../model/attributes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrchestratorService } from '../service/orchestrator.service';


@Component({
  selector: 'app-orch-form-rule-delete',
  imports: [CommonModule,
    FormsModule,  ReactiveFormsModule],
  templateUrl: './orch-form-rule-delete.component.html',
  styleUrl: './orch-form-rule-delete.component.css'
})
export class OrchFormRuleDeleteComponent {

  entityRuleDeleteForm: FormGroup;
  submitted = false;
  result = "";

  constructor(private orcService: OrchestratorService,
    private fb: FormBuilder) {
      this.entityRuleDeleteForm = this.fb.group({
        idrule: [""], // Simple input attribute
      });
      console.log(orcService.platform);
  }

  submit(form: NgForm) {
    const entity = new Entity();
    entity.id = "DeleteRule";
    entity.type = "RULE_DELETE";
    this.submitted = true;

    const att = new Attributes();
    att.name = "RULE_ID";
    att.type = "String";
    att.value = this.entityRuleDeleteForm.value.idrule;
    entity.attributes.push(att);

    console.log(JSON.stringify(entity));

    this.orcService.deleteRule(entity).subscribe({
      next: (v) => {
          console.log(v);
          this.result = "SUCESS! ..."+v;
      },
      error: (e) => {
          console.error(e);
          this.result = "Erro! ..."+JSON.stringify(e);
      },
      complete() {
        console.log("is completed");
      }
    });
  }
}

