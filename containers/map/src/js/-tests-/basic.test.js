import ErrorRepository from '../src/ErrorRepository';

test('should show description of the error', () => {
  const errorsList = new ErrorRepository();

  expect(errorsList.translate(404)).toBe('Not Found');
});

test('should show "Unknown error"', () => {
  const errorsList = new ErrorRepository();

  expect(errorsList.translate(507)).toBe('Unknown error');
});