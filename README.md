# FoundationX <!-- omit in toc -->

Centralised API for the FoundationX server network.

### Table of Contents <!-- omit in toc -->

- [Technologies](#technologies)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Script Reference](#script-reference)
  - [Dependency Reference](#dependency-reference)
  - [Secret Reference](#secret-reference)

### Technologies

<div style="display: flex">

  <a href="https://bun.com/">
    <img alt="Bun" src="https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun&logoColor=white" />
  </a>

  <a href="https://www.typescriptlang.org/">
    <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>

  <a href="https://expressjs.com/">
    <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=for-the-badge">
  </a>

  <a href="https://www.postgresql.org/">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white">
  </a>

  <a href="https://www.docker.com/">
    <img alt="Docker" src="https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white">
  </a>

</div>

### Installation

This assumes you have [git](https://git-scm.com/), [Bun](https://bun.com/get), and [Docker](https://www.docker.com/products/docker-desktop/) installed already.

```sh
git clone TODO
bun install
cp .env.example .env
```

Now fill out the `.env` file with the correct values.

If you are using Docker for hosting the PostgreSQL database, you can now start it up using the following command:

```sh
docker compose up --build --detach db
```

The API should be ready to start now, which can be done using:

```sh
bun run start
```

To see other scripts you can run using the `bun run <script name>` syntax, see the [script reference](#script-reference).

### Documentation

Overall architecture is outlined in the [developer Figma design document](https://www.figma.com/board/ZqnQe21dQOwzYBmlF1Vwfw/FoundationX-Systems). If you are a developer and do not have access to this, please contact NachoToast.

#### Script Reference

- `start` - Starts the API with hot reloading enabled.
- `lint` - Runs biome linting checks.
- `lint:fix` - Same as `lint` but fixes the found issues.
- `typecheck` - Runs type checking.
- `test` - Runs unit and integration tests.

#### Dependency Reference

- `discord.js` - Discord bot API library, used by our main bot and stats bots.
- `express` - Web server library, hosts routes.
- `express-rate-limit` - Rate limiting for API routes.

#### Secret Reference

- `CODECOV_TOKEN` is used by the [CI workflow](.github/workflows/ci.yml) to upload code test coverage to [Codecov](https://about.codecov.io/).
- The [deployment workflow](.github/workflows/deploy.yml) uses `HOST`, `USERNAME`, `PASSWORD`, `PORT`, and `DIRECTORY` secrets for SSH.
