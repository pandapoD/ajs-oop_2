import Character from '../js/Character';
import Bowman from '../js/Bowman';

test('Проверяем, что имя персонажа является строчным значением', () => {
  expect(() => new Character(1111, 'Bowman')).toThrow();
});

test('Проверка на ошибку, если имя короче 2 символов', () => {
  expect(() => new Character('a', 'Daemon')).toThrow();
});

test('Проверка на ошибку, если имя длиннее 10 символов', () => {
  expect(() => new Character('abcdabcdabc', 'Magician')).toThrow();
});

test('Проверка на ошибку, если персонаж не существует', () => {
  expect(() => new Character('Tom', 'Provodnic')).toThrow();
});

test('Метод levelUp повышает показатели level, health, attack, deffence', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Bums',
    type: 'Bowman',
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
  });
});

test('Метод levelUp. Проверка на ошибку, если health = 0', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('Нельзя повысить левел умершего!');
});

test('Метод damage должен уствновить health = 0, при health < 0', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  const expectedHealth = 0;
  recieved.damage(200);
  recieved.health = 0;
  expect(recieved.health).toEqual(expectedHealth);
});

test('Метод damage должен правильно изменять значение health', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  const expectedHealth = 99.25;
  recieved.damage(1);
  expect(recieved.health).toEqual(expectedHealth);
});

test('Метод damage не должен изменять значение health, если health равно 0', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  recieved.health = 0;
  const result = {
    name: 'Bums',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  recieved.damage(20);
  expect(recieved).toEqual(result);
});
