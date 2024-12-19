class GameManager {
    constructor() {
        this.games = [];
        this.categories = ['Action', 'Adventure', 'Strategy', 'RPG'];
    }

    initialize() {
        console.log('Game system initialized');
        this.loadGames();
    }

    loadGames() {
        // TODO: Implement game loading logic
    }
}

const gameManager = new GameManager();
gameManager.initialize();
