import {data} from '../store/data/data';
import {user} from './user/user';
import {process} from './process/process';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  PROCESS: `PROCESS`
};

export default {
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.PROCESS]: process
};
