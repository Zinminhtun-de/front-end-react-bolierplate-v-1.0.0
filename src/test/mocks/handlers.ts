// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('https://dummyjson.com/todos', () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: 'Do something nice for someone I care about',
            completed: true,
            userId: 26,
          },
        ],
      },
      { status: 200 }
    );
  }),
];
export default handlers;
