import axios from 'axios';

import { delay, getData } from '@/shared/api/posts';

describe('API Posts async tests', () => {
  test('Корректное значение для delay', async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});

jest.mock('axios');

describe('API Posts fetch getData', () => {
  let res: unknown;
  beforeEach(() => {
    res = {
      data: [
        {
          id: 1,
          name: 'Ivan',
          username: 'ivan',
          email: 'ivan@mail.com',
        },
        {
          id: 2,
          name: 'Ivan',
          username: 'ivan',
          email: 'ivan@mail.com',
        },
        {
          id: 3,
          name: 'Ivan',
          username: 'ivan',
          email: 'ivan@mail.com',
        },
      ],
    };
  });

  test('Корректное значение', async () => {
    (axios.get as jest.Mock).mockResolvedValue(res);
    const data = await getData();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(data).toEqual(['1', '2', '3']);
  });
});
