import Magician from '../js/Magician';

test('Создание объекта выполнится верно', () => {
  const recieved = new Magician('Makk', 'Magician');
  expect(recieved).toEqual({
    name: 'Makk',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
