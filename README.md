# TypeScript patterns

Programming patterns, JavaScript features, and TypeScript examples.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for details.

## License

Apache 2.0; see [`LICENSE`](LICENSE) for details.

## Disclaimer

This project is not an official Google project. It is not supported by
Google and Google specifically disclaims all warranties as to its quality,
merchantability, or fitness for a particular purpose.

## Developing

### Install

    npm install

### Test

    npm run test

#### Run a single test

    npx jest -t '<TestName>'

For example:

    npx jest -t 'regex'

### Build

    npm run build

This tests, compiles, and lints the source code. Run this before pushing a
change.

Note that the TypeScript files in the `src` directory are compiled by `tsc`, and
the TypeScript files in the `site` directory are compiled by `parcel`.

### Serve

    npm start

This serves files from the `site` directory at `http://localhost:1234`.
