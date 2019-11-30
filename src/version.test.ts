import version from './version';

jest.mock('../package.json', () => {
  return { version: '0' };
});

describe('version', () => {
  it('shoud return version', () => {
    const versionMock = version();
    expect(versionMock).toBe('0');
  });
});
