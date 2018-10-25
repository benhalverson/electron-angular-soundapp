import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { VgAPI } from 'videogular2/core';
export interface IMedia {
  title: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _electronService: ElectronService) {}
  playlist: Array<IMedia> = [
    {
      title: 'Bell',
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
        localStorage.audio5 || './assets/audio/crowd-countdown-ten-to-one.wav',
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
        localStorage.audio9 || './assets/audio/police-bull-horn-pull-over.wav',
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

  preload = 'auto';
  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;
  openMenu() {
    // this.trigger.openMenu();
    // console.log('menu opened');
  }

  onPlayerReady(api: VgAPI): void {
    this.api = api;
    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.playAudio.bind(this));
  }
  playAudio() {
    this.api.play();
  }

  onClickPLaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
    console.log('current item', this.currentItem);
    console.log('clicked from onclickplaylist');
  }
  ngOnInit() {}
}
