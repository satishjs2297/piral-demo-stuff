import * as React from 'react';
import { PiletApi } from 'app-shell-demo';
import { SampleTileComponent } from './SampleTileComponent';

export function setup(app: PiletApi) {
  console.log("Testing Angular Pilet.. setUp Method Invoked.")
  app.registerPage('/ngSample', app.fromNg(SampleTileComponent))
}
