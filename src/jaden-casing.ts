declare global {
  interface String {
    toJadenCase(): string;
  }
}

String.prototype.toJadenCase = function (): string {
  const arr = this.toString()
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1));
  return arr.join(" ");
};

export {};
