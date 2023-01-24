import Magician from '../magician';
import Daemon from '../daemon';

test('Трезвый маг атакует как обычно', () => {
  const mage = new Magician('asd');
  const result = mage.attack;
  expect(result).toEqual([100, 90, 80, 70, 60]);
});

test('Одурманенный демон атакует хуже обычного', () => {
  const daemon = new Daemon('asd');
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result).toEqual([100, 85, 72, 60, 48]);
});