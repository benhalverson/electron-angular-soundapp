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
      },
      {
        title: 'crowd bravo',
        src: localStorage.audio4 || './assets/audio/crowd-bravo.wav',
        type: 'audio/wav'
      },
      {
        title: 'cround count down 10 - 1 ',
        src:
          localStorage.audio5 ||
          './assets/audio/crowd-countdown-ten-to-one.wav',
        type: 'audio/wav'
      },
      {
        title: 'crowd painful ohhhh',
        src: localStorage.audio6 || './assets/audio/crowd-painful-ohh.wav',
        type: 'audio/wav'
      },
      {
        title: 'harp spell classic',
        src: localStorage.audio7 || './assets/audio/harp-spell-classic.wav',
        type: 'audio/wav'
      },
      {
        title: 'huge long ovation male crowd',
        src:
          localStorage.audio8 ||
          './assets/audio/huge-long-ovation-male-crowd.wav',
        type: 'audio/wav'
      },
      {
        title: 'police bull horn pull over',
        src:
          localStorage.audio9 ||
          './assets/audio/police-bull-horn-pull-over.wav',
        type: 'audio/wav'
      },
      {
        title: 'police siren',
        src: localStorage.audio10 || './assets/audio/police-siren.wav',
        type: 'audio/wav'
      },
      {
        title: 'car crash',
        src: localStorage.audio10 || './assets/audio/sfx-car-crash.wav',
        type: 'audio/wav'
      },
      {
        title: 'spring 3',
        src: localStorage.audio10 || './assets/audio/spring-3.wav',
        type: 'audio/wav'
      },
      {
        title: 'toilet flush big',
        src: localStorage.audio10 || './assets/audio/toilet-flush-big.wav',
        type: 'audio/wav'
      },
      {
        title: 'train-horn-double',
        src: localStorage.audio10 || './assets/audio/train-horn-double.wav',
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

  playAudio4() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[3]['src'];
    audio.load();
    audio.play();
  }
  playAudio5() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[4]['src'];
    audio.load();
    audio.play();
  }
  playAudio6() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[5]['src'];
    audio.load();
    audio.play();
  }
  playAudio7() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[6]['src'];
    audio.load();
    audio.play();
  }
  playAudio8() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[7]['src'];
    audio.load();
    audio.play();
  }
  playAudio9() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[8]['src'];
    audio.load();
    audio.play();
  }
  playAudio10() {
    console.log('clicked');
    const audio = new Audio();
    audio.src = this.sources[9]['src'];
    audio.load();
    audio.play();
  }
  ngOnInit() {}
}
