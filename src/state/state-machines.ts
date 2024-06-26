// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

type EnabledState = 'ENABLED' | 'DISABLED';

/**
 * A simple state machine that toggles between two states: ENABLED and DISABLED.
 */
export class Enabled {
  state: EnabledState;

  constructor() {
    this.state = 'DISABLED';
  }

  toggle(): void {
    if (this.state === 'DISABLED') {
      this.state = 'ENABLED';
    } else {
      this.state = 'DISABLED';
    }
  }
}
