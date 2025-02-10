import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OrchestratorService } from './service/orchestrator.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet,
    FormsModule  // Add FormsModule here
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private orcService: OrchestratorService){
    orcService.setPlatform("Kafka");
  }

  scrollToTop() {
    throw new Error('Method not implemented.');
  }
  title = 'orch-client';

  onChoiceChange(e: any) {
    // console.log((e.target as HTMLSelectElement)?.value); // also work
    console.log(e.target.value);
    this.orcService.setPlatform(e.target.value);
  }

}
