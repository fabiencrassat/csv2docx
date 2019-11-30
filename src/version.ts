export default function version(): string {
  const packageJson = require('../package.json');
  return packageJson.version;
}
