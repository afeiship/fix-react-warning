// eslint-disable-next-line no-console
const originalWarn = console.error;
// eslint-disable-next-line no-console
console.error = (...args) => {
  const arg1 = String(args[0]);
  if (
    arg1.indexOf(
      'Support for defaultProps will be removed from function components in a future major release.'
    ) >= 0
  ) {
    return;
  }
  originalWarn(...args);
};

export default () => {};
