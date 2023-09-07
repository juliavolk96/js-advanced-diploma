import { test, expect } from '@jest/globals';
import { characterGenerator } from '../generators';
import { generateTeam } from '../generators';
import Character from '../Character';

class CharacterForGenerator extends Character {
  constructor(level) {
    super(level);
  }
}

test('characterGenerator should create characters only from allowedTypes', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const maxAttempts = 10; 

  for (let i = 0; i < maxAttempts; i++) {
    const character = generator.next().value;
    expect(character).toBeInstanceOf(CharacterForGenerator);
  }
});

test('characterGenerator should create characters with level between 1 and maxLevel', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const maxAttempts = 10;

  for (let i = 0; i < maxAttempts; i++) {
    const character = generator.next().value;
    expect(character.level).toBeGreaterThanOrEqual(1);
    expect(character.level).toBeLessThanOrEqual(maxLevel);
  }
});

test('characterGenerator should work infinitely without errors', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;

  const generator = characterGenerator(allowedTypes, maxLevel);
  const maxAttempts = 100;

  for (let i = 0; i < maxAttempts; i++) {
    const character = generator.next().value;
    expect(character).not.toBeNull();
  }
});

test('generateTeam should create a team with the specified number of characters', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;
  const characterCount = 5; 

  const team = generateTeam(allowedTypes, maxLevel, characterCount);

  expect(team.length).toBe(characterCount);
});


test('generateTeam should create characters with levels between 1 and maxLevel', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;
  const characterCount = 5;

  const team = generateTeam(allowedTypes, maxLevel, characterCount);

  for (const character of team) {
    expect(character.level).toBeGreaterThanOrEqual(1);
    expect(character.level).toBeLessThanOrEqual(maxLevel);
  }
});

test('generateTeam should create characters from allowedTypes', () => {
  const allowedTypes = [CharacterForGenerator];
  const maxLevel = 3;
  const characterCount = 5;

  const team = generateTeam(allowedTypes, maxLevel, characterCount);

  for (const character of team) {
    expect(character).toBeInstanceOf(CharacterForGenerator);
  }
});
