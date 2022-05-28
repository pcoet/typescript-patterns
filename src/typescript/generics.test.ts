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
  getLargest,
  getOldest,
  Entry,
  Stack,
} from './generics';

describe('generics', () => {
  class Member {
    firstName: string;

    lastName: string;

    dob: Date;

    id: number;

    constructor(firstName: string, lastName: string, dob: Date, id: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = dob;
      this.id = id;
    }
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  Member.prototype.valueOf = function getOverrideValue(): string {
    return this.lastName;
  };

  const mick = new Member('Mick', 'Jagger', new Date(1943, 7, 26), 111);
  const charlie = new Member('Charlie', 'Watts', new Date(1941, 6, 2), 112);
  const ronnie = new Member('Ronnie', 'Wood', new Date(1947, 6, 1), 113);
  const keith = new Member('Keith', 'Richards', new Date(1943, 12, 18), 114);

  describe('getLargest', () => {
    test('gets largest number', () => {
      const arr = [5, 117, 19, 23];
      const expected = 117;
      const actual = getLargest(arr);
      expect(actual).toEqual(expected);
    });
    test('gets largest string', () => {
      const arr = ['foo', 'bar', 'zab', 'baz'];
      const expected = 'zab';
      const actual: string = getLargest(arr);
      expect(actual).toEqual(expected);
    });
    test('gets largest Member object', () => {
      const arr = [mick, charlie, ronnie, keith];
      const expected = ronnie;
      const actual = getLargest(arr);
      expect(actual).toEqual(expected);
    });
  });

  describe('getOldest', () => {
    const members = [mick, charlie, ronnie, keith];
    expect(getOldest(members)).toEqual(charlie);
  });

  describe('Stack', () => {
    let numStack: Stack<number>;
    let stringStack: Stack<string>;
    let memberStack: Stack<Member>;

    beforeEach(() => {
      numStack = new Stack();
      stringStack = new Stack();
      memberStack = new Stack();

      numStack.push(17);
      numStack.push(19);

      stringStack.push('foo');
      stringStack.push('bar');

      memberStack.push(mick);
      memberStack.push(keith);
    });

    test('peek', () => {
      expect(numStack.peek()).toEqual(19);
      expect(stringStack.peek()).toEqual('bar');
      expect(memberStack.peek()).toEqual(keith);
    });

    test('push', () => {
      numStack.push(23);
      stringStack.push('baz');
      memberStack.push(charlie);

      expect(numStack.peek()).toEqual(23);
      expect(stringStack.peek()).toEqual('baz');
      expect(memberStack.peek()).toEqual(charlie);
    });

    test('pop', () => {
      numStack.pop();
      stringStack.pop();
      memberStack.pop();

      expect(numStack.peek()).toEqual(17);
      expect(stringStack.peek()).toEqual('foo');
      expect(memberStack.peek()).toEqual(mick);
    });

    test('size', () => {
      expect(numStack.size()).toEqual(2);
      expect(stringStack.size()).toEqual(2);
      expect(memberStack.size()).toEqual(2);
    });

    test('isEmpty', () => {
      expect(numStack.isEmpty()).toEqual(false);
      expect(stringStack.isEmpty()).toEqual(false);
      expect(memberStack.isEmpty()).toEqual(false);

      numStack.pop();
      stringStack.pop();
      memberStack.pop();

      numStack.pop();
      stringStack.pop();
      memberStack.pop();

      expect(numStack.isEmpty()).toEqual(true);
      expect(stringStack.isEmpty()).toEqual(true);
      expect(memberStack.isEmpty()).toEqual(true);
    });
  });

  describe('Entry', () => {
    let numToMember: Entry<number, Member>;
    let strToMember: Entry<string, Member>;
    let memberToMember: Entry<Member, Member>;

    interface SimpleObject {
      prop: string;
    }

    let objToStr: Entry<SimpleObject, string>;

    beforeEach(() => {
      numToMember = new Entry(76, mick);
      strToMember = new Entry('singer', mick);
      memberToMember = new Entry(keith, mick);
      objToStr = new Entry({ prop: 'foo' }, 'bar');
    });

    test('getKey', () => {
      expect(numToMember.getKey()).toEqual(76);
      expect(strToMember.getKey()).toEqual('singer');
      expect(memberToMember.getKey()).toEqual(keith);
      expect(objToStr.getKey()).toEqual({ prop: 'foo' });
    });

    test('getValue', () => {
      expect(numToMember.getValue()).toEqual(mick);
      expect(strToMember.getValue()).toEqual(mick);
      expect(memberToMember.getValue()).toEqual(mick);
      expect(objToStr.getValue()).toEqual('bar');
    });
  });
});
