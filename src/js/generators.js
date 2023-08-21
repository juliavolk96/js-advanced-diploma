/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
// export function* characterGenerator(allowedTypes, maxLevel) {
//   // TODO: write logic here
// }

export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const randomType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    const randomLevel = Math.ceil(Math.random() * maxLevel);
    yield new randomType(randomLevel);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей.
 * Количество персонажей в команде - characterCount
 * */
// export function generateTeam(allowedTypes, maxLevel, characterCount) {
//   // TODO: write logic here
// }

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  const generator = characterGenerator(allowedTypes, maxLevel);

  for (let i = 0; i < characterCount; i++) {
    const character = generator.next().value;
    team.push(character);
  }

  return team;
}
