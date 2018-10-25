import { AudioPlayerModule } from './audio-player.module';

describe('AudioPlayerModule', () => {
  let audioPlayerModule: AudioPlayerModule;

  beforeEach(() => {
    audioPlayerModule = new AudioPlayerModule();
  });

  it('should create an instance', () => {
    expect(audioPlayerModule).toBeTruthy();
  });
});
