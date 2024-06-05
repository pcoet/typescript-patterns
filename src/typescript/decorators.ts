// Copyright 2024 Google LLC
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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

type Color = 'none' | 'periwinkle' | 'razzmatazz' | 'timberwolf';
type Feature =
    'grippy knob' | 'extended lever' | 'extra cog' | 'decorative pinwheel';

// TODO: Fix the typing, so we don't need all of the `eslint-disable` lines.
function inspected(target: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);
  function replacementMethod(this: any, ...args: any[]) {
    const result = target.call(this, ...args);
    console.log(`Inspected ${methodName} operation`);
    return result;
  }
  return replacementMethod;
}

/**
 * Example class that shows how to use method decorators. To learn more, see:
 * https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators
 */
export class Thingamabob {
  private color: Color = 'none';
  private features: Feature[] = [];

  @inspected
  paint(color: Color): Thingamabob {
    this.color = color;
    return this;
  }

  @inspected
  upgrade(features: Feature[]): Thingamabob {
    this.features = [ ...this.features, ...features ];
    return this;
  }
}