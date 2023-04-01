import showSpecialAttack from '../app';

test('должна возвращать извлечённый массив из объектов с четыремя полями', () => {
  const expected = [
    {
      id: 8,
      nameAttack: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      nameAttack: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  const received = showSpecialAttack();
  expect(received).toEqual(expected);
});