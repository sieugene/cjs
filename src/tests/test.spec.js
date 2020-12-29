describe("Some test", () => {
  test("fn should be call", () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalled();
  });
});
