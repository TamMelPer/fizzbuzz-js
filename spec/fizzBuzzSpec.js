describe("FizzBuzz", function() {

  it("should output FizzBuzz if divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should output Fizz if divisible by 3", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("should output Buzz if divisible by 5", function() {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("should output the number otherwise", function() {
    expect(fizzBuzz(2)).toEqual(2);
  });
});
