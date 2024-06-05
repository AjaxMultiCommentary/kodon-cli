# @@ COMMENTARY TITLE @@

Based on [Kōdōn](https://github.com/ajaxMultiCommentary/kodon).

## Development

To develop and run the application locally, make sure you have Node.js and NPM installed. See https://docs.npmjs.com/downloading-and-installing-node-js-and-npm for help.

### Installing dependencies

With `node` and `npm` installed, you can install the application's dependencies locally by running

```sh
$ npm install
```

from the root directory (the same directory that contains this README).

### Running the application

To run the application locally, use

```sh
$ npm run dev
```

This will start a development server at localhost:5137 by default. Any changes that you make to the application code should be picked up automatically. If for some reason they are not, try restarting the server.

## AjMC Development

### Ingesting TEI XML Editions

You will need to have a recent version of the the Elixir runtime available on your system. With Homebrew on macOS, run

```sh
$ brew install elixir
```

See https://elixir-lang.org/install.html for more information.

Finally, you can now run

```sh
$ elixir support/ingestion_scripts/editions.exs
```

This script will update the `out/editions/` directory with the latest changes from your base editions.

**!!! NB !!!**: For now, this will overwrite any changes that have been manually made to files in `out/editions`.
