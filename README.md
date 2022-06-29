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


----

## About The Project

OCMP is a recursive acronym for "OCMP Consent Management Platform" and is a free and open source project that provides a transparent way of managing consent.

This project is mostly aimed towards static sites that are built with static site generators like Jekyll.

For directions on how to use OCMP and its features refer to the documentation.

[Back to top](#ocmp-consent-management-platform)

----

## Getting Started

Follow the instructions below to set up the project locally.
Be warned that a few tools such as cleanup node commands and the certificate generation rely on linux commands and won't run on windows.

### Prerequisites

To set the project locally you need to have [nodejs](https://nodejs.org/en/download/) installed on your system.

Then you need to have [gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) installed.

These two are used for tooling and building the source files for OCMP.

If you need to run or build the docs locally then you need to install [jekyll](https://jekyllrb.com/docs/).
Jekyll does rely on ruby but jekyll's documentation covers its own dependencies.

Some tooling used in the project assumes that is run on a Linux environment. Those that do, will have a *(Linux Only)* indication.

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

There are the main commands you are going to need.

- `npm run install-all` will install the node modules and the ruby bundles for the docs. if you need to only build the source then you can run `npm install` instead.

- `npm run build` will build only the OCMP source files and output them in the `dist` directory. The command will also build the files needed for GTM.

- `npm run generate-ssl` *(Linux Only)* will generate the ssl certificates for running the docs with https locally. After you generate the certificates you need to install the `localhost.crt` found in `docs/_ssl` to your browser.

- `npm run watch` will create a watch task for local development, so you won't have to build everything over and over.

- `npm run serve` will clean the docs, build, then and run jekyll in ssl. If you find trouble with it change the command `serve` in `package.json` to use the non ssl jekyll serve ie from `npm run jekyll-serve-docs-ssl` to `npm run jekyll-serve-docs`.

- `npm run uninstall-all` *(Linux Only)* will run `clean-node`, `clean-dist` and `clean-jekyll`.

- todo build src/docs & release

### Secondary commands

These commands are mainly used internally withing the main ones.

- `npm run jekyll-serve-docs` will serve jekyll locally.
- `npm run jekyll-serve-docs-ssl` as above but with certificates for https support.
- `npm run gulp-build-docs-src` will build the docs. Used by `serve`.
- `npm run clean-docs` *(Linux Only)* will clean the `docs/css` and `docs/js`.
- `npm run clean-jekyll` *(Linux Only)* will run `clean-docs`, delete `.dev` and remove `Gemfile.lock`.
- `npm run clean-node` *(Linux Only)* will remove the `node_modules` folder and delete `package-lock.json`
- `npm run clean-dist` *(Linux Only)* will clean the entire contents of `dist` folder.

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
- `src/sass/themes` contains the various themes for the OCMP. You can change the compiled theme by including it in `src/sass/ocmp.scss`
- `src/js` contains the code for the OCMP.
- `src/js/data` contains the default translated data example and event initializer for the OCMP. You can change which data is initialized in `src/js/ocmpdata.js`.
- `src/html` contains the html markup for the OCMP.
- `src/gtm_template` contains the source code and data for importing the OCMP data template in GTM, for prettier data entry.
- `src/gtm_html` contains a base html that combines OCMP's `css`, `js` and `html` for use in GTM.

### Dist Folder

- `dist/ocmp` contains all the built code for OCMP.
- `dist/ocmp/src` contains the production ready `css`, `js` and `html` files for OCMP.
- `dist/ocmp/gtm` contains the OCMP data template file for GTM and the html file that has `css`, `js` and `html`, all included inline and ready for use in GTM custom html tag.

### Docs Folder

- `docs/css` & `docs/js` always contain dynamically generated css and js files from the `src` directory.

[Back to top](#ocmp-consent-management-platform)

----

## License

Distributed under the GNU GPL v2.0 License. See `LICENSE.txt` for more information.

[Back to top](#ocmp-consent-management-platform)

----
