import Zombie from '../js/Zombie';

test('Создание объекта выполнится верно', () => {
  const recieved = new Zombie('Fric', 'Zombie');
  expect(recieved).toEqual({
    name: 'Fric',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
