import axios from 'axios';

import { mapArrToString } from '@/shared/lib/helpers/transformations';

export const delay = (callback: () => unknown, ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });

type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const userIds = res.data.map((user: TUser) => user.id);
    return mapArrToString(userIds);
  } catch (error) {
    console.log(error);
  }
};
