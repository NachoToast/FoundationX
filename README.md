# FoundationX <!-- omit in toc -->

Centralised API for the FoundationX server network.

[![codecov](https://codecov.io/gh/NachoToast/FoundationX/graph/badge.svg?token=IQMMONOGJ8)](https://codecov.io/gh/NachoToast/FoundationX)
[![CI](https://github.com/NachoToast/FoundationX/actions/workflows/ci.yml/badge.svg)](https://github.com/NachoToast/FoundationX/actions/workflows/ci.yml)
[![Deploy](https://github.com/NachoToast/FoundationX/actions/workflows/deploy.yml/badge.svg)](https://github.com/NachoToast/FoundationX/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/NachoToast/FoundationX/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/NachoToast/FoundationX/actions/workflows/codeql-analysis.yml)

### Table of Contents <!-- omit in toc -->

- [Technologies](#technologies)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Script Reference](#script-reference)
  - [Dependency Reference](#dependency-reference)
  - [Secret Reference](#secret-reference)

### Technologies

[![Bun](https://img.shields.io/badge/Bun-000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.com/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=for-the-badge)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

### Installation

This assumes you have [git](https://git-scm.com/), [Bun](https://bun.com/get), and [Docker](https://www.docker.com/products/docker-desktop/) installed already.

```sh
git clone https://github.com/NachoToast/FoundationX.git
cd FoundationX
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

- `cors` - CORS policy management for routes.
- `discord.js` - Discord bot API library, used by our main bot and stats bots.
- `express` - Web server library, hosts routes.
- `express-openapi-validator` - API request and response validation.
- `express-rate-limit` - Rate limiting for API routes.
- `jsonwebtoken` - Session management helper.
- `swagger-ui-express` - Standard spec definitions and `/api-docs` route.

#### Secret Reference

- `CODECOV_TOKEN` is used by the [CI workflow](.github/workflows/ci.yml) to upload code test coverage to [Codecov](https://about.codecov.io/).
- The [deployment workflow](.github/workflows/deploy.yml) uses `HOST`, `USERNAME`, `PASSWORD`, `PORT`, and `DIRECTORY` secrets for SSH.
