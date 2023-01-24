import Magician from './magician';
import Daemon from './daemon';

const magician = new Magician('ee');
const daemon = new Daemon('asd');

const team = [magician, daemon];
team.reverse();