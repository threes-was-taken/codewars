class Kata {
  static validatePin(pin: string): boolean {
    return /^(\d{4} | \d{6})$/.test(pin)
  }
}

console.log(Kata.validatePin('.234'));
