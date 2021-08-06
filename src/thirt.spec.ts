import thirt from "./thirt";

test("Divisible by 13", () => {
  expect(thirt(8529)).toBe(79);
  expect(thirt(85299258)).toBe(31);
});
