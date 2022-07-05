# OCMP Consent Management Platform

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the docs locally](#running-the-docs-locally)
  - [Building OCMP](#building-ocmp)
- [Usage](#usage)
  - [Main Commands](#main-commands)
  - [Secondary commands](#secondary-commands)
- [Project Structure](#project-structure)
  - [Src Folder](#src-folder)
  - [Dist Folder](#dist-folder)
  - [Docs Folder](#docs-folder)
- [License](#license)
- [Roadmap](#roadmap)


----

## About The Project

OCMP is a recursive acronym for "OCMP Consent Management Platform" and is a free and open source project that provides a transparent way of managing consent.

This project is mostly aimed towards static sites that are built with static site generators like Jekyll.

For directions on how to use OCMP and its features refer to the documentation.

[Back to top](#ocmp-consent-management-platform)

----

## Getting Started

Follow the instructions below to set up the project locally.
Be warned that some tooling used in the project assumes that is run on a Linux environment and won't run on windows. Those that do, will have a *(Linux Only)* indication.

### Prerequisites

To set the project locally you need to have [nodejs](https://nodejs.org/en/download/) installed on your system.

Then you need to have [gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) installed.

These two are used for tooling and building the source files for OCMP.

If you need to run or build the docs locally then you need to install [jekyll](https://jekyllrb.com/docs/).
Jekyll does rely on ruby but jekyll's documentation covers its own dependencies.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/ChrisMavrommatis/ocmp.git
   ```

2. Install NPM packages and Gems

   ```sh
   npm run install-all
   ```

### Running the docs locally

1. Generate the localhost certificates

   ```sh
   npm run generate-ssl
   ```

2. Import the certificate located at `docs/_ssl/localhost.crt` into your browser to stop giving the warning.

3. Run the project

   ```sh
   npm run serve
   ```

4. Run watcher in another terminal for changes

   ```sh
   npm run watch
   ```

### Building OCMP

1. Run the build command

   ```sh
   npm run build
   ```

[Back to top](#ocmp-consent-management-platform)

----

## Usage

I've purposely used node and gulp to unify all the tooling required.
package.json describes all the scripts used by the project.
All commands are issued from the project's root directory.

### Main Commands

There are the main commands you are going to need. You can prefix any of them with `npm run` to run them. For example to run `serve` you should run `npm run serve`.

- `install-all` will install the node modules and the ruby bundles for the docs. If you only need to build the source then you can run `npm install` instead.

- `serve` will run `gulp-clean-docs`, `gulp-build-docs-src` then `jekyll-serve-docs-ssl`. You can change `jekyll-serve-docs-ssl` to `jekyll-serve-docs` if you can't, or don't want to generate the ssl certificates.

- `watch` will create a watch task for local development, so you won't have to build everything over and over.

- `build` will run `gulp-clean-ocmp`, build the OCMP source files and run `build-src-gtm_html--production`, which will output them in the `dist/ocmp` directory. Also used by `package`.

- `package` will run `gulp-clean-packages`, `build` and will package the files and output them to the `dist/packages` directory.

- `generate-ssl` *(Linux Only)* will generate the ssl certificates for running the docs with https locally. After you generate the certificates you need to install the `localhost.crt` found in `docs/_ssl` to your browser.

### Secondary commands

These commands are mainly used internally withing the main ones. You can prefix any of them with `npm run` to run them. For example to run `jekyll-serve-docs` do `npm jekyll-serve-docs`.

- `jekyll-serve-docs` will serve jekyll locally. It will cd into `docs` first as a support for github pages.
- `jekyll-serve-docs-ssl` as above but with certificates for https support.
- `gulp-build-docs-src` will build the docs source files. Used by `serve`.
- `gulp-clean-docs` will clean the `docs/css` and `docs/js`. Used by `serve`.
- `gulp-clean-jekyll` will delete `.dev` directory.
- `gulp-clean-ocmp` will clean the entire contents of `dist/ocmp` folder. Used by `build`.
- `gulp-clean-packages` will clean the entire contents of `dist/packages` folder. Used by `package`.

[Back to top](#ocmp-consent-management-platform)

----

## Project Structure

- `src` contains the OCMP source code files.
- `docs` contains the documentation site source files.
- `tools` contains various tools used in the project. Mainly for aiding in building or local development.
- `dist` will contain the OCMP files when built from source.
- `.dev` will contain files for use in local development.

### Src Folder

- `src/sass` contains the style source files for OCMP
- `src/themes` contains the various themes for the OCMP. You can change the compiled theme by including it in `src/sass/ocmp.scss`
- `src/js` contains the code for the OCMP.
- `src/data` contains the default translated data examples and event initializer for the OCMP. You can change which data is initialized for the docs in `src/js/ocmpdata.js`.
- `src/html` contains the html markup for the OCMP.
- `src/gtm_template` contains the source code and data for importing the OCMP data template in GTM, for prettier data entry.
- `src/gtm_html` contains a base html that combines OCMP's `css`, `js` and `html` for use in GTM.

### Dist Folder

- `dist/ocmp` contains all the built code for OCMP.
- `dist/ocmp/src` contains the production ready `css`, `js` and `html` files for OCMP.
- `dist/ocmp/gtm` contains the OCMP data template file for GTM and the html file that has `css`, `js` and `html`, all included inline and ready for use in GTM custom html tag.
- `dist/packages` contains the released packages from `dist/ocmp/src` and `dist/ocmp/gtm`

### Docs Folder

- `docs/css` & `docs/js` always contain dynamically generated css and js files from the `src` directory.

[Back to top](#ocmp-consent-management-platform)

----

## License

Distributed under the GNU GPL v2.0 License. See `LICENSE.txt` for more information.

[Back to top](#ocmp-consent-management-platform)

----

## Roadmap

- [ ] (1)Switch OCMP to use css variables from sass
- [ ] Add query access to consent state
- [ ] Make OCMP be color customizable without theme*

*Requires (1)

[Back to top](#ocmp-consent-management-platform)

----
