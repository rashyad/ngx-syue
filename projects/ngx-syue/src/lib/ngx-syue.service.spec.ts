import { TestBed } from '@angular/core/testing';

import { NgxSyueService } from './ngx-syue.service';

describe('NgxStuffService', () => {
  let service: NgxSyueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSyueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
