# Contributing <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Installation Guide](#installation-guide)
- [Script Reference](#script-reference)
- [Other](#other)

### Installation Guide

1. Make sure you have [Node.JS](https://nodejs.org/en) installed, version 18 is recommended.
    - Check you have Node installed by running `node --version` in your terminal.

2. Now clone the repository and install the dependencies using one of the three methods below (in order of preference):
   1. Using [Corepack](https://nodejs.org/api/corepack.html), which usually comes with Node.
        ```sh
        corepack enable
        pnpm install
        ```
    2. Using [pnpm](https://pnpm.io/) directly, which requires installation.
        ```sh
        npm install --global pnpm
        pnpm install
        ```
    3. Using [npm](https://www.npmjs.com/), which comes with Node and is slow.
        ```sh
        npm install --global pnpm
        pnpm install
        ```

3. Done, you can now start the website using `pnpm start` (if using Corepack or pnpm), or `npm start` otherwise.
   1. Alongside `start`, there are a bunch of other scripts you can run, see the [Script Reference](#script-reference) section for more info.

### Script Reference

-   `start` Hosts the website with hot-reloading enabled.
-   `build` Compiles website source code into JavaScript.
-   `lint` Makes sure code follows style rules.
-   `typecheck` Makes sure there are no type errors in the code.
-   `check-all` Does linting, typechecking, and testing. Note that this requires pnpm.
-   `preview` Hosts the compiled version of website (make sure you've run build first).

### Other

This project was bootstrapped using the [Vite + React + TS template](https://vitejs.dev/guide/).
