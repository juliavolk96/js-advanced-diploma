import { test, expect } from '@jest/globals';
import { calcTileType, calcHealthLevel } from '../utils';

test('calcTileType returns correct tile type for different positions', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(7, 8)).toBe('top-right');
  expect(calcTileType(56, 8)).toBe('bottom-left');
  expect(calcTileType(63, 8)).toBe('bottom-right');
  expect(calcTileType(8, 8)).toBe('left');
  expect(calcTileType(15, 8)).toBe('right'); 
  expect(calcTileType(57, 8)).toBe('bottom');
  expect(calcTileType(1, 8)).toBe('top');
  expect(calcTileType(55, 8)).toBe('right');
  expect(calcTileType(28, 8)).toBe('center');
});

test('calcHealthLevel returns correct health level for different health values', () => {
  expect(calcHealthLevel(10)).toBe('critical');
  expect(calcHealthLevel(30)).toBe('normal');
  expect(calcHealthLevel(100)).toBe('high'); 
});
