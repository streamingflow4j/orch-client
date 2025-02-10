import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrchFormComponent } from './orch-form/orch-form.component';
import { OrchFormRuleComponent } from './orch-form-rule/orch-form-rule.component';
import { OrchFormRuleUpdateComponent } from './orch-form-rule-update/orch-form-rule-update.component';
import { OrchFormRuleDeleteComponent } from './orch-form-rule-delete/orch-form-rule-delete.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event', component: OrchFormComponent },
  { path: 'rule', component: OrchFormRuleComponent },
  { path: 'rule-update', component: OrchFormRuleUpdateComponent },
  { path: 'rule-delete', component: OrchFormRuleDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OrchFormComponent, OrchFormRuleComponent, OrchFormRuleUpdateComponent, OrchFormRuleDeleteComponent];
