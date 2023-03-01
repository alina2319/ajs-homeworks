import {
  createDaemon,     
} from '../app';


test('The Daemon must be created with the correct parameters', () => {
  expect(createDaemon('Eddy', 'Daemon')).toEqual({
    name: createDaemon('Eddy', 'Daemon').name, type: createDaemon('Eddy', 'Daemon').type, health: 100, level: 1, attack: 10, defence: 40,
  });
});

test ('The Bowman must be created with the correct parameters', () => {
  expect (createBowman('Eddy', 'Bowman')).toEqual({
    name: createBowman ('Eddy', 'Bowman').name, type: createBowman ('Eddy', 'Bowman').type, health: 100, level: 1, attack: 25, defence: 25,
  });
});

test ('The Magician must be created with the correct parameters', () => {
  expect (createMagician('Eddy', 'Magician')).toEqual({
    name: createMagician ('Eddy', 'Magician').name, type: createMagician ('Eddy', 'Magician').type, health: 100, level: 1, attack: 10, defence: 40,
  });
});

test ('The Swordsman must be created with the correct parameters', () => {
  expect (createSwordsman('Eddy', 'Swordsman')).toEqual({
    name: createSwordsman('Eddy', 'Swordsman').name, type: createSwordsman('Eddy', 'Swordsman').type, health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('The Undead must be created with the correct parameters', () => {
  expect(createUndead('Eddy', 'Undead')).toEqual({
    name: createUndead('Eddy', 'Undead').name, type: createUndead('Eddy', 'Undead').type, health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('The Zombie must be created with the correct parameters', () => {
  expect(createZombie('Eddy', 'Zombie')).toEqual({
    name: createZombie('Eddy', 'Zombie').name, type: createZombie('Eddy', 'Zombie').type, health: 100, level: 1, attack: 40, defence: 10,
  });
});

// Проверка ошибок

test('name check <2', () => {
  expect(() => { createZombie('E', 'Zombie'); }).toThrow('the name must not be shorter than 2 characters!');
});

test('name check >10', () => {
  expect(() => { createZombie('Eddy Zombie 2', 'Zombie'); }).toThrow('the name must not be longer than 10 characters!');
});

test('name check string', () => {
  expect(() => { createZombie(1997, 'Zombie'); }).toThrow('the name must be of the string type!');
});

test('type check', () => {
  expect(() => { createZombie('Eddy', 'flyer'); }).toThrow('the type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie');
});