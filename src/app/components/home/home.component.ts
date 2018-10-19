import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { ElectronService } from '../../providers/electron.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;
  sources: Array<Object>;
  constructor(private _electronService: ElectronService) {
    this.sources = [
      {
        title: 'bell',
        src: localStorage.audio1 || './assets/audio/bell-3.wav',
        type: 'audio/wav'
      },
      {
        title: 'compact car',
        src: localStorage.audio2 || './assets/audio/compact-car-screeching.wav',
        type: 'audio/wav'
      },
      {
        title: 'crowd awww',
        src: localStorage.audio3 || './assets/audio/crowd-aww.wav',
        type: 'audio/wav'
      }
    ];
  }

  openMenu() {
    this.trigger.openMenu();
    console.log('menu opened');
  }
  // TODO: refactor so playAudio knows which button or key was pressed
  playAudio() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[0]['src'];
    audio.load();
    audio.play();
  }
  playAudio2() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[1]['src'];
    audio.load();
    audio.play();
  }
  playAudio3() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[2]['src'];
    audio.load();
    audio.play();
  }
  ngOnInit() {}
}
