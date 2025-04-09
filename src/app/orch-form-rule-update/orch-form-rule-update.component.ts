import { Component, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Entity } from '../model/entity';
import { Attributes } from '../model/attributes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrchestratorService } from '../service/orchestrator.service';




@Component({
  selector: 'app-orch-form-rule-update',
  imports: [CommonModule,
    FormsModule,  ReactiveFormsModule],
  templateUrl: './orch-form-rule-update.component.html',
  styleUrl: './orch-form-rule-update.component.css'
})
export class OrchFormRuleUpdateComponent {

  result = "";
  entityRuleUpdateForm: FormGroup;
  submitted = false;

  constructor(private orcService: OrchestratorService,
    private fb: FormBuilder) {
      this.entityRuleUpdateForm = this.fb.group({
        id: [""], // Simple input attribute
        idrule: [""], // Simple input attribute
        rule: [""], // Another input attribute
        destination: [""], // Another input attribute
      });
  }

  submit(form: NgForm) {
    const entity = new Entity();
    entity.id = this.entityRuleUpdateForm.value.id;
    entity.type = "RULE_UPDATE";
    this.submitted = true;

    const att = new Attributes();
    att.name = "RULE_ID";
    att.type = "String";
    att.value = this.entityRuleUpdateForm.value.idrule;
    entity.attributes.push(att);

    const att1 = new Attributes();
    att1.name = "RULE_QUERY";
    att1.type = "String";
    att1.value = this.entityRuleUpdateForm.value.rule;
    entity.attributes.push(att1);

    const att2 = new Attributes();
    att2.name = this.entityRuleUpdateForm.value.destination;
    att2.type = "RULE_QUEUE";
    att2.value = this.entityRuleUpdateForm.value.destination;
    entity.attributes.push(att2);

    console.log(JSON.stringify(entity));

    this.orcService.updateRule(entity).subscribe({
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
