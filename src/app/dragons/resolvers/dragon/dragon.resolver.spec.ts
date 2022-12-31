import { TestBed } from '@angular/core/testing';

import { DragonResolver } from './dragon.resolver';

describe('DragonResolver', () => {
  let resolver: DragonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DragonResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
