import { TestBed } from '@angular/core/testing';

import { NoteServceService } from './note-servce.service';

describe('NoteServceService', () => {
  let service: NoteServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
