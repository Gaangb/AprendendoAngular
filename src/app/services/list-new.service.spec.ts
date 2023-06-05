import { TestBed } from '@angular/core/testing';

import { ListNewService } from './list-new.service';

describe('ListNewService', () => {
  let service: ListNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
