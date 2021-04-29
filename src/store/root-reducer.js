import {data} from '../store/data/data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default {
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
};
