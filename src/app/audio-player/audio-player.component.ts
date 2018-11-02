import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { KeyBoardShortcutsService } from '../key-board-shortcuts.service';
export interface IMedia {
  title: string;
  src: string;
  type: string;
  category?: string;
  key?: string;
}
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  playlist: Array<IMedia> = [
    {
      title: 'Bell',
      src: './assets/audio/bell-3.wav',
      type: 'audio/wav',
      category: 'good',
      key: '0'
    },
    {
      title: 'Car Screech',
      src: './assets/audio/compact-car-screeching.wav',
      type: 'audio/wav',
      key: '1'
    },
    {
      title: 'Crowd awww',
      src: './assets/audio/crowd-aww.wav',
      type: 'audio/wav'
    },
    {
      title: 'Crowd bravo',
      src: './assets/audio/crowd-bravo.wav',
      type: 'audio/wav',
      category: 'Good'
    },
    {
      title: 'Count down',
      src: './assets/audio/crowd-countdown-ten-to-one.wav',
      type: 'audio/wav'
    },
    {
      title: 'Crowd painful ohhhh',
      src: './assets/audio/crowd-painful-ohh.wav',
      type: 'audio/wav',
      category: 'Wrong'
    },
    {
      title: 'Harp Magic',
      src: './assets/audio/magic-turning-spells-casting.wav',
      type: 'audio/wav'
    },
    {
      title: 'Long ovation',
      src: './assets/audio/huge-long-ovation-male-crowd.wav',
      type: 'audio/wav'
    },
    {
      title: 'Police pull over',
      src: './assets/audio/police-bull-horn-pull-over.wav',
      type: 'audio/wav'
    },
    {
      title: 'Police siren',
      src: './assets/audio/police-siren.wav',
      type: 'audio/wav'
    },
    {
      title: 'Car crash',
      src: './assets/audio/sfx-car-crash.wav',
      type: 'audio/wav'
    },
    {
      title: 'Spring',
      src: './assets/audio/spring-3.wav',
      type: 'audio/wav'
    },
    {
      title: 'Toilet flush',
      src: './assets/audio/toilet-flush-big.wav',
      type: 'audio/wav'
    },
    {
      title: 'Train horn',
      src: './assets/audio/train-horn-double.wav',
      type: 'audio/wav'
    },
    {
      title: 'Ta Da!',
      src: './assets/audio/Ta-Da.wav',
      type: 'audio/wav'
    },
    {
      title: 'Sub Dive',
      src: './assets/audio/Submarine-Dive.wav',
      type: 'audio/wav'
    },
    {
      title: 'Alarm Sound Navy',
      src: './assets/audio/Alarm-Sound-Navy.wav',
      type: 'audio/wav'
    },
    {
      title: 'Angelic Choir',
      src: './assets/audio/Angelic-Choir.wav',
      type: 'audio/wav'
    },
    {
      title: 'Drum Roll',
      src: './assets/audio/sfx-drum-roll.wav',
      type: 'audio/wav'
    },
    {
      title: 'Buzzer',
      src: './assets/audio/error-buzz.wav',
      type: 'audio/wav'
    },
    {
      title: 'Crowd oh no!',
      src: './assets/audio/crowd-scream-oh-no.wav',
      type: 'audio/wav'
    },
    {
      title: 'Drums burlesque',
      src: './assets/audio/drums-burlesque.wav',
      type: 'audio/wav'
    },
    {
      title: 'Boooing',
      src: './assets/audio/short-booings.wav',
      type: 'audio/wav'
    },
    {
      title: 'Crowd Laugh Long',
      src: './assets/audio/crowd-laugh-long.wav',
      type: 'audio/wav'
    },
    {
      title: 'Crowd Laugh Short',
      src: './assets/audio/crowd-laugh-short.wav',
      type: 'audio/wav'
    },
    {
      title: 'Evil Laugh',
      src: './assets/audio/evil-laugh.wav',
      type: 'audio/wav'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;
  public name: string;
  controls = false;
  autoplay = true;
  loop = false;
  preload = 'auto';
  pause = false;

  constructor(private _keyboardShortcuts: KeyBoardShortcutsService) {}

  onClickPLaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
    this._keyboardShortcuts.handleKeyboardEvent(this.api.play);
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(() => {
      // Set the audio to the beginning
      this.api.getDefaultMedia().currentTime = 0;
    });
  }

  ngOnInit() {}
}
