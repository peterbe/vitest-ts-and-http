# Using `vitest` to start a server for its testing

> [!TIP]
> See also: <https://github.com/peterbe/jest-ts-and-http> which is very much
what this repo contrasts itself with

This is a simulation where you have end-to-end tests that use HTTP
as part of its tests.
This is useful when you don't want to *unit test* the server but instead
treat it bit more like a **black box**. The tests look like this:

```js
  const r = await fetch("http://localhost:3000");
  expect(r.status).toBe(200);
```

What the `vitest` config does is that it starts that server for you when
the tests begin. One server, multiple tests. When all tests have run
(successful or not) it closes the server.

## To play

To manually run the server:

```shell
npm run start
```

You have to Ctrl-C kill it yourself.

## To test

Just run:

```shell
npm run test
```

You'll see:

```shell
❯ CI=1 npm run test

> jest-and-ts@1.0.0 test
> vitest


 RUN  v1.5.0 /Users/peterbe/dev/JAVASCRIPT/vitest-ts-and-http

Server running at http://127.0.0.1:3000/
 ✓ src/server.test.ts  (1 test) 44ms
 ✓ src/server-failures.test.ts  (1 test) 44ms

 Test Files  2 passed (2)
      Tests  2 passed (2)
   Start at  15:27:44
   Duration  357ms (transform 47ms, setup 0ms, collect 20ms, tests 88ms, environment 0ms, prepare 166ms)
```
