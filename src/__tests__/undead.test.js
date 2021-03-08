import Undead from '../js/Undead';

test('Создание объекта выполнится верно', () => {
  const recieved = new Undead('Darvas', 'Undead');
  expect(recieved).toEqual({
    name: 'Darvas',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
