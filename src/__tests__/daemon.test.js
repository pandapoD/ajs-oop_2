import Daemon from '../js/Daemon';

test('Создание объекта выполнится верно', () => {
  const recieved = new Daemon('Dimon', 'Daemon');
  expect(recieved).toEqual({
    name: 'Dimon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
