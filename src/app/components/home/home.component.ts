import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _electronService: ElectronService) {}
  pressedKey;
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent($event) {
    this.pressedKey = $event.key;
    console.log('Keyboard Key: ', $event.key);
  }
  ngOnInit() {
    this.handleKeyboardEvent(Event);
  }
}
