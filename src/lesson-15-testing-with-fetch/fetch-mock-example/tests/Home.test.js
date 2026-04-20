import 'isomorphic-fetch'; // needed for no "fetch is not defined errors

import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { http, HttpResponse } from 'msw'; // this will essentially mock the rest calls.
import { setupServer } from 'msw/node'; // we'll set up a "mocked" server

import { BASE_URL } from '../utils/api/base.js'; // we'll need this for our "mocked" server
import Home from '../pages/index.js';

// ... imports from above ...

const QUOTE =
  'All I required to be happy was friendship and people I could admire.';
const AUTHOR = 'Charles Baudelaire';

const server = setupServer(
  http.get(`${BASE_URL}/random`, (res, req, ctx) => {
    // below this is going to be the "mocked" resposne
    return HttpResponse.json({
      content: QUOTE,
      author: AUTHOR,
    });
  }),
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

// ... we'll write our tests down here ...
test('test home loads a quote on load', async () => {
  // wait for the home piece to render.
  await act(() => {
    render(<Home />);
  });
  // get the author and quote element
  let quoteElement = screen.getByTestId('quote');
  let authorElement = screen.getByTestId('author');

  // check to see that they are equal to the new values.
  expect(quoteElement).toHaveTextContent(QUOTE);
  expect(authorElement).toHaveTextContent(AUTHOR);
});

test('home loads a new quote when clicking the button.', async () => {
  // load the
  await act(() => {
    render(<Home />);
  });

  // add a very important quote that will change your life like below.
  const NEW_QUOTE = 'I can shoot 3s with my eyes closed.';
  const NEW_AUTHOR = 'Dan Mouris';

  // create a new request with the new quote and author.
  server.use(
    http.get(`${BASE_URL}/random`, (req, res, ctx) => {
      // respond using a mocked JSON body
      return HttpResponse.json({
        _id: 'someid',
        content: NEW_QUOTE,
        author: NEW_AUTHOR,
      });
    }),
  );
  // get the elements
  let quoteElement = screen.getByTestId('quote');
  let authorElement = screen.getByTestId('author');
  let buttonElement = screen.getByTestId('new-quote-button');

  // click the new button and wait for the state to change.
  await act(() => {
    buttonElement.click();
  });

  // ensure that the new values have been updated correctly.
  expect(quoteElement).toHaveTextContent(NEW_QUOTE);
  expect(authorElement).toHaveTextContent(NEW_AUTHOR);
});
