import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Smartphone from '../domain/Smartphone';

test('new card should not be empty', () => {
  const cart = new Cart();
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 1000);
  const movie = new Movie(
    1009, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['science fiction', 'action', 'fantasy', 'adventure'],
    '137 мин',
    300);
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  console.log(book.price + musicAlbum.price + movie.price)
  expect(cart.getTotalCostIncludingDiscounts(10)).toBe(2970);
});

test('new card should not be empty', () => {
  const cart = new Cart();
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const smartphone = new Smartphone(1015, 'Samsung', 'Galaxy S8', 15000);
  const movie = new Movie(
    1009, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['science fiction', 'action', 'fantasy', 'adventure'],
    '137 мин',
    250);
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);
  cart.add(smartphone);
  cart.add(smartphone);
  cart.add(smartphone);
  cart.delItem(1009);
  cart.delItem(1015);
  expect(cart.items.length).toBe(3);
});