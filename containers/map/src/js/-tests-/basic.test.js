import ErrorRepository from '../ErrorRepository';

test('Если код ошибки error1 существует, то можно получить человекочитаемый текст ошибки', () => {
  const errorBase = new ErrorRepository();
  errorBase.collection.set('error1', 'Добавить можно только объект класса Character');
  const result = errorBase.translate('error1');
  expect(result).toBe('Добавить можно только объект класса Character');
});

test('Если код ошибки не существует, то можно получить человекочитаемое сообщение об этом', () => {
  const errorBase = new ErrorRepository();
  const result = errorBase.translate('error3');
  expect(result).toBe('Unknown error');
});