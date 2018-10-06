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
        button: 'Clapping',
        src: localStorage.audio1 || './assets/audio/clapping.mp3',
        type: 'audio/mp3'
      },
      {
        button: 'Asdf',
        src: localStorage.audio2 || './assets/audio/clapping.mp3',
        type: 'audio/mp3'
      },
      {
        button: 'And Another effect',
        src: localStorage.audio3 || './assets/audio/clapping.mp3',
        type: 'audio/mp3'
      }
    ];
  }

  openMenu() {
    this.trigger.openMenu();
    console.log('menu opened');
  }
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
