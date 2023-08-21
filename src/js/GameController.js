import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';
import Team from './Team';

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
    const playerTeam = new Team(generateTeam(['swordsman', 'bowman', 'magician'], 1, 2));
    const enemyTeam = new Team(generateTeam(['undead', 'vampire', 'daemon'], 1, 2));

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
