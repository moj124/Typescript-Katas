


declare global {
    interface String {
      padZero(length: number): string;
      toJadenCase(): string;
    }
  }

String.prototype.toJadenCase = function () : string {
    const arr = this.toString().split(' ').map((element) => element.charAt(0).toUpperCase() + element.slice(1));
    return arr.join(' ');
};

String.prototype.padZero = function (length: number) {
    let d = String(this)
    while (d.length < length) {
      d = '0' + d;
    }
    return d;
  };

export {}