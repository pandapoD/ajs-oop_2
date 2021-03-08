import Bowman from '../js/Bowman';

test('Создание объекта выполнится верно', () => {
  const recieved = new Bowman('Bums', 'Bowman');
  expect(recieved).toEqual({
    name: 'Bums',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
