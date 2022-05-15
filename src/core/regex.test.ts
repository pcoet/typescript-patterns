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

import {
  exampleExec,
  exampleReplace,
  exampleTest,
  exampleSearch,
  Pattern,
} from './regex';

describe('regex', () => {
  describe('Pattern', () => {
    test('/crow/', () => {
      const str = 'cawcawcrowcaw';
      expect(exampleTest(Pattern.crow, str)).toBe(true);
    });
    test('/[crow]/', () => {
      const str = 'xyzc123';
      expect(exampleTest(Pattern.c_r_o_w, str)).toBe(true);
    });
    test('/[crow]/', () => {
      expect(exampleTest(Pattern.c_r_o_w, 'abc123xyz')).toBe(true);
      expect(exampleTest(Pattern.c_r_o_w, 'abd123xyz')).toBe(false);
    });
    test('/[c-w]/', () => {
      expect(exampleTest(Pattern.c_to_w, '123dxyz')).toBe(true);
      expect(exampleTest(Pattern.c_to_w, '123bxyz')).toBe(false);
    });
    test('/[^crow]/', () => {
      expect(exampleTest(Pattern.no_c_r_o_w, 'crowcrowcrow!')).toBe(true);
      expect(exampleTest(Pattern.no_c_r_o_w, 'crowcrowcrow')).toBe(false);
    });
    test('/cr+ow/', () => {
      expect(exampleTest(Pattern.crrow, 'cow')).toBe(false);
      expect(exampleTest(Pattern.crrow, 'crow')).toBe(true);
      expect(exampleTest(Pattern.crrow, 'crrow')).toBe(true);
    });
    test('/cr?ow/', () => {
      expect(exampleTest(Pattern.cow_or_crow, 'cow')).toBe(true);
      expect(exampleTest(Pattern.cow_or_crow, 'crow')).toBe(true);
      expect(exampleTest(Pattern.cow_or_crow, 'crrow')).toBe(false);
    });
    test('/cr*ow/', () => {
      expect(exampleTest(Pattern.cow_or_crrow, 'cow')).toBe(true);
      expect(exampleTest(Pattern.cow_or_crrow, 'cro')).toBe(false);
      expect(exampleTest(Pattern.cow_or_crrow, 'crow')).toBe(true);
      expect(exampleTest(Pattern.cow_or_crrow, 'crrow')).toBe(true);
    });
    test('/crow(croak){1,2}crow/', () => {
      expect(exampleTest(Pattern.crow_frog_crow, 'crowcroakcrow')).toBe(true);
      expect(exampleTest(Pattern.crow_frog_crow, 'crowcroakcroakcrow')).toBe(true);
      expect(exampleTest(Pattern.crow_frog_crow, 'crowcroakcroakcroakcrow')).toBe(false);
    });
    test('/^(crow)+$/', () => {
      expect(exampleTest(Pattern.all_crow, 'crow')).toBe(true);
      expect(exampleTest(Pattern.all_crow, 'crowcrow')).toBe(true);
      expect(exampleTest(Pattern.all_crow, 'duckcrow')).toBe(false);
      expect(exampleTest(Pattern.all_crow, 'crowduck')).toBe(false);
      expect(exampleTest(Pattern.all_crow, 'crow crow')).toBe(false);
    });
    test('/\bcrow\b/', () => {
      expect(exampleTest(Pattern.bounded_crow, 'crow')).toBe(true);
      expect(exampleTest(Pattern.bounded_crow, 'duck crow duck')).toBe(true);
      expect(exampleTest(Pattern.bounded_crow, 'duckcrowduck')).toBe(false);
    });
    test('/^(crow|raven|rook)$/', () => {
      expect(exampleTest(Pattern.corvid, 'crow')).toBe(true);
      expect(exampleTest(Pattern.corvid, 'raven')).toBe(true);
      expect(exampleTest(Pattern.corvid, 'rook')).toBe(true);
      expect(exampleTest(Pattern.corvid, 'duck')).toBe(false);
    });
  });
  test('exampleTest', () => {
    expect(exampleTest(/crow/, 'robin crow raven')).toBe(true);
  });
  test('exampleExec', () => {
    const str = 'robin crow raven sparrow crow seagull';
    expect(exampleExec('duck', str)).toEqual([]);
    expect(exampleExec('crow', str)).toEqual([
      {
        match: 'crow',
        start: 6,
        end: 10,
      }, {
        match: 'crow',
        start: 25,
        end: 29,
      },
    ]);
  });
  test('exampleSearch', () => {
    expect(exampleSearch(/crow/, 'rook crow raven')).toBe(5);
    expect(exampleSearch(/crow/, 'rook duck raven')).toBe(-1);
  });
  test('exampleReplace', () => {
    expect(exampleReplace(Pattern.global_crow, 'rook', 'crow crow crow')).toBe('rook rook rook');
    expect(exampleReplace(/(crow) (raven)/, '$2 $1', 'crow raven')).toEqual('raven crow');
  });
});
