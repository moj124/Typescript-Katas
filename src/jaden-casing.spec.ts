import "./jaden-casing";

test("Capitalize the first letter of each word", () => {
  expect(`How can mirrors be real if our eyes aren't real`.toJadenCase()).toBe(
    "How Can Mirrors Be Real If Our Eyes Aren't Real",
  );
});
