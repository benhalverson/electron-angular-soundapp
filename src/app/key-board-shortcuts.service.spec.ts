import { TestBed } from '@angular/core/testing';

import { KeyBoardShortcutsService } from './key-board-shortcuts.service';

describe('KeyBoardShortcutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyBoardShortcutsService = TestBed.get(KeyBoardShortcutsService);
    expect(service).toBeTruthy();
  });
});
