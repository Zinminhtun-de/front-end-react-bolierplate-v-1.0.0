/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { afterAll, beforeAll } from 'vitest';
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
