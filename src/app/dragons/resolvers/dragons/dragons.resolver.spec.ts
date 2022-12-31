import { TestBed } from '@angular/core/testing';

import { DragonsResolver } from './dragons.resolver';

describe('DragonsResolver', () => {
  let resolver: DragonsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DragonsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
