import '@testing-library/jest-dom/vitest'

import axios from 'axios'

import { server } from '../mocks/server'

// jsdom's XMLHttpRequest is built on undici, which @mswjs/interceptors cannot
// capture, so force axios onto its fetch adapter that MSW does intercept.
axios.defaults.adapter = 'fetch'

beforeAll(() => server.listen({ onUnhandledFrame: 'error' }))

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
})
