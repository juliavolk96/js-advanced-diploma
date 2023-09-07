import { test, expect } from '@jest/globals';
import Character from '../Character';
import Swordsman from '../characters/Swordsman';

test('Creating Character instance should throw an error', () => {
  expect(() => new Character(1)).toThrowError('Character class should not be instantiated directly.');
});

test('Creating Swordsman instance should not throw an error', () => {
  expect(() => new Swordsman(1)).not.toThrowError();
});
