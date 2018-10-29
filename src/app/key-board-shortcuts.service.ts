import { Injectable, HostListener } from '@angular/core';
import { VgAPI } from 'videogular2/core';
@Injectable({
  providedIn: 'root'
})
export class KeyBoardShortcutsService {
  constructor() {}
  pressedKey;
  api: VgAPI;
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent($event) {
    this.pressedKey = $event.key;
    if ($event.key === '0' || '1') {
      console.log(`key ${$event.key}`);
      // this.api.play();
    }
    if ($event.key === 's') {
      this.api.pause();
    }
    // if(event.key === 1 - 9) play sound
    // if(event.key === 's') stop sound
  }
}
