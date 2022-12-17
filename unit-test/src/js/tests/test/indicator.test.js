import showIndicator from '../indicator';

test.each([
  { name: 'Маг', health: 51, expected: 'healthy' },
  { name: 'Маг', health: 15, expected: 'wounded' },
  { name: 'Маг', health: 10, expected: 'critical' },
])('should show indicator', ({ health, expected }) => {
  const data = { health };
  const received = showIndicator(data);
  expect(received).toBe(expected);
});

test('should show indicator of null', () => {
  const expected = null;
  const received = showIndicator({ name: 'Маг', health: -55 });
  expect(received).toBe(expected);
});