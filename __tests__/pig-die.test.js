import {Player} from './../src/player.js';

describe('Player', () =>{
  var player;
  beforeEach(() =>{
    player = new Player(34, 20, 0);
  });

  test('should correctly create a player object', () => {
    expect (player.score).toEqual(34);
    expect (player.temp_score).toEqual(20);
    expect (player.playerNum).toEqual(0);
  });

  test('shoud correctly return 1 if playerNum is === 0', () => {
    expect (player.Switch()).toEqual(1);
  });

  test("should return temp_score of player", () => {
    expect (player.checkRoll()).toEqual(20);
  });

  test('should add temp_score to score', () => {
    expect (player.Hold()).toEqual(54);
  });

  test('should return 0 if random number = 1', () => {
    var x = 1;
    expect (player.Turn(x)).toEqual(0);
  })

  test('should set temp_score to 0 if x = 1', ()=> {
    var x = 1;
    player.Turn(x);
    expect (player.temp_score).toEqual(0);
  })

test ('should add x to temp_score if x != 1',() => {
  var x = 4;
  expect (player.Turn(x)).toEqual(24);
})
});