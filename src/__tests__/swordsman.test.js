import Swordsman from '../js/Swordsman';

test('Создание объекта выполнится верно', () => {
  const recieved = new Swordsman('Tom', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Tom',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
