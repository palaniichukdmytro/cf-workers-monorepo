# Turborepo with Next.js 14 and @opennextjs/cloudflare

This is a Turborepo monorepo project using Next.js 14 and @opennextjs/cloudflare for Cloudflare deployment.

## Project Structure

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) 14 app
- `web`: a [Next.js](https://nextjs.org/) 14 app with @opennextjs/cloudflare integration
- `@repo/ui`: a React component library shared by both `web` and `docs` applications

## Tech Stack

- **Turborepo**: Monorepo management
- **Next.js 14**: React framework
- **TypeScript**: Static type checking
- **pnpm**: Package manager
- **@opennextjs/cloudflare**: Cloudflare integration for Next.js
- **Firebase Admin**: Authentication and backend services

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

To build a specific app:

```
cd apps/web
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

To develop a specific app:

```
cd apps/web
pnpm dev
```

### Start

To start a specific app after building:

```
cd apps/web
pnpm start
```

### Step to reproduce - Preview with @opennextjs/cloudflare

To preview the web app with @opennextjs/cloudflare:

```
cd apps/web
pnpm preview
```

## Current Issues

### Issue with 'jose' package when using @opennextjs/cloudflare

When running `pnpm preview` in the web app, you may encounter the following error:

```
Error: Build failed with 2 errors:
.open-next/server-functions/default/node_modules/.pnpm/jwks-rsa@3.2.0/node_modules/jwks-rsa/src/integrations/passport.js:1:21: ERROR: Could not resolve "jose"
.open-next/server-functions/default/node_modules/.pnpm/jwks-rsa@3.2.0/node_modules/jwks-rsa/src/utils.js:1:21: ERROR: Could not resolve "jose"
```

This issue occurs because the 'jose' package is not properly resolved when using @opennextjs/cloudflare with the jwks-rsa package. The standard `pnpm build` and `pnpm start` commands work as expected, but the issue appears only when using the @opennextjs/cloudflare integration with `pnpm preview`.

