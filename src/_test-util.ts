function info(before: any, after: any, result: any) {
  console.info('Before:\n', before);
  console.info('After:\n', after);
  console.info('Result:\n', result);
}

beforeAll(() => {
  global.info = info;
});
