import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { KeyBoardShortcutsService } from '../../key-board-shortcuts.service';
import { VgAPI } from 'videogular2/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _electronService: ElectronService,
    private _keyboardShortcuts: KeyBoardShortcutsService
  ) {}

  pressedKey;
  api: VgAPI;
  // public pingPong(): void {
  //   const pong: string = this._electronService.ipcRenderer.sendSync('ping');
  //   console.log('pong', pong);
  // }

  // public beep() {
  //   this._electronService.shell.beep();
  // }
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
  ngOnInit() {
    // this.handleKeyboardEvent(Event);
    this._keyboardShortcuts.handleKeyboardEvent(Event);
    // this._electronService.ipcRenderer.sendSync('test');
    // this.pingPong();
  }
}
