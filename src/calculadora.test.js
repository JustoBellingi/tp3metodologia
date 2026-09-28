const { sumar, restar } = require("./calculadora");

test("debe sumar dos números correctamente", () => {
  expect(sumar(5, 3)).toBe(8);
});

test("debe restar dos números correctamente", () => {
  expect(restar(10, 4)).toBe(6);
});
