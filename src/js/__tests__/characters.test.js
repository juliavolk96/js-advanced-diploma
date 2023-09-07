import Bowman from "../characters/Bowman";
import Swordsman from "../characters/Swordsman";
import Magician from "../characters/Magician";

test('Creating instances of inherited classes should not throw an error', () => {
  expect(() => new Bowman(1)).not.toThrowError();
  expect(() => new Swordsman(1)).not.toThrowError();
  expect(() => new Magician(1)).not.toThrowError();
});
