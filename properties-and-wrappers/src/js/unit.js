const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function showSpecialAttack() {
  const { special } = character;
  const result = [];

  for (const prop of special) {
    const {
      id, name: nameAttack, icon, description = 'Описание недоступно',
    } = prop;
    result.push({
      id, nameAttack, icon, description,
    });
  }

  return result;
}

showSpecialAttack();