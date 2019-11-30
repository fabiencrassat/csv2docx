import { log } from './log';

describe('log', () => {
  it('shoud call console.log with 2 string arguments', () => {
    const consoleLog = spyOn(console, 'log');
    log('foo');
    expect(consoleLog).toHaveBeenCalledTimes(1);
    expect(consoleLog).toHaveBeenCalledWith('foo');
  });
});
