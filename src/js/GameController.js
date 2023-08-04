import themes from './themes';

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
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
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
