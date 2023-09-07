import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';
import Team from './Team';
import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

export default class GameController {
  constructor(gamePlay, stateService) {
    // отвечает за отображение игрового интерфейса и взаимодействие с DOM-элементами
    this.gamePlay = gamePlay;
    // позволяет сохранять и загружать состояние игры
    this.stateService = stateService;
  }

  // Инициализация игры
  init() {
    // Отрисовка поля: устанавливаем тему prairie
    const theme = themes.prairie;
    // отрисовка игрового интерфейса с указанной темой
    this.gamePlay.drawUi(theme);

    // Генерируем команду игрока и команду соперника
    const playerTeam = new Team(generateTeam([Swordsman, Bowman, Magician]));
    const enemyTeam = new Team(generateTeam([Undead, Vampire, Daemon], 1, 2));

    // Получаем позиции персонажей для игрока и врага
    const playerPositions = this.getCharacterPositions(playerTeam.characters, 'player');
    const enemyPositions = this.getCharacterPositions(enemyTeam.characters, 'enemy');

    // Объединяем позиции персонажей
    const allPositions = playerPositions.concat(enemyPositions);

    // Отрисовываем персонажей на поле
    this.gamePlay.redrawPositions(allPositions);

    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  getCharacterPositions(characters, side) {
    // Распределение позиций персонажей на поле
    const positions = [];

    if (side === 'player') {
      for (let i = 0; i < characters.length; i++) {
        const position = i;
        const positionedCharacter = new PositionedCharacter(characters[i], position);
        positions.push(positionedCharacter);
      }
    } else if (side === 'enemy') {
      for (let i = 0; i < characters.length; i++) {
        const position = i + 48;
        const positionedCharacter = new PositionedCharacter(characters[i], position);
        positions.push(positionedCharacter);
      }
    }

    return positions;
  }

  // onCellClick(index) {
  //   // TODO: react to click
  // }

  // onCellEnter(index) {
  //   // TODO: react to mouse enter
  // }

  // onCellLeave(index) {
  //   // TODO: react to mouse leave
  // }
}
