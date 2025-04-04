import { TestBed } from '@angular/core/testing';

import { OrchestratorService } from './orchestrator.service';
import { provideHttpClient } from '@angular/common/http';

describe('OrchestratorService', () => {
  let service: OrchestratorService;
 // let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
 //   httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(OrchestratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
