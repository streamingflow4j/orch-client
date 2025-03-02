import { Component, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Entity } from '../model/entity';
import { Attributes } from '../model/attributes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrchestratorService } from '../service/orchestrator.service';


@Component({
  selector: 'app-orch-form-rule',
  imports: [CommonModule, FormsModule,  ReactiveFormsModule],
  templateUrl: './orch-form-rule.component.html',
  styleUrl: './orch-form-rule.component.css'
})
export class OrchFormRuleComponent {

      entityRuleForm: FormGroup;
      submitted = false;
      result = "";
      constructor(private orcService: OrchestratorService,
        private fb: FormBuilder) {
          this.entityRuleForm = this.fb.group({
            id: [""], // Simple input attribute
            rule: [""], // Another input attribute
            destination: [""], // Another input attribute
          });
      }

      submit(form: NgForm) {
        const entity = new Entity();
        entity.id = this.entityRuleForm.value.id;
        entity.type = "RULE_CREATE";
        this.submitted = true;

        const att = new Attributes();
        att.name = "RULE_QUERY";
        att.type = "String";
        att.value = this.entityRuleForm.value.rule;
        entity.attributes.push(att);

        const att2 = new Attributes();
        att2.name = this.entityRuleForm.value.destination;
        att2.type = "RULE_QUEUE";
        att2.value = this.entityRuleForm.value.destination;
        entity.attributes.push(att2);

        console.log(JSON.stringify(entity));

        this.orcService.createRule(entity).subscribe({
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
