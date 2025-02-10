import { Component, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Entity } from '../model/entity';
import { Attributes } from '../model/attributes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OrchestratorService } from '../service/orchestrator.service';


@Component({
  selector: 'app-orch-form',
  imports: [CommonModule,
    FormsModule,  ReactiveFormsModule],
  templateUrl: './orch-form.component.html',
  styleUrl: './orch-form.component.css'
})
export class OrchFormComponent {

  entityForm: FormGroup;

  submitted = false;

  constructor(private orchService: OrchestratorService,
    private fb: FormBuilder) {
      this.entityForm = this.fb.group({
        id: [""], // Simple input attribute
        type: [""], // Another input attribute
        attributes: this.fb.array([]), // Dynamic attributes will be stored here
      });
  }

  // Getter to access the FormArray for dynamic attributes
  get attributes(): FormArray {
    return this.entityForm.get("attributes") as FormArray;
  }

  /**
   * Adds a new attribute to the dynamic form.
   */
  addAttribute(name: string, type: string, value: string) {
    const att = new Attributes();
    att.name = name;
    att.type = type;
    att.value = value;
    this.attributes.push(this.fb.group(att));
  }


  removeAttribute(index: number) {
    this.attributes.removeAt(index);
  }

  submit(form: NgForm) {
    const entity = new Entity();
    entity.id = this.entityForm.value.id;
    entity.type = "EVENT_CREATE";
    this.submitted = true;

    // Map form data to attributes
    const attributesData = (this.entityForm.get('attributes') as FormArray).controls.map(control => ({
      name: control.get('name')?.value ?? '',
      type: control.get('type')?.value ?? '',
      value: control.get('value')?.value ?? ''
    }));

    entity.attributes = attributesData;
    console.log(JSON.stringify(entity));

    this.orchService.createEvent(entity).
    subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  });

  }
}
