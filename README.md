# About the project

This is a Vue/Nuxe (SPA/SSR) application for editing the list of client servers. Stack: Vue/Next; Typescript; Ant Design; Sass.

The application interface consists of a list on the left and an edit form on the right. The list of client servers is represented by a collection of array models with objects:

```js
[
  {
    customer_id: 'user1',
    server_name: 'server7',
    server_type: 'vds'
  },
  {
    customer_id: 'user5',
    server_name: 'server2',
    server_type: 'dedicated'
  },
  {
    customer_id: 'user3',
    server_name: 'server4',
    server_type: 'hosting'
  }
]
```

### Application Features

1. Output a list of models;
2. Selecting the model to edit;
3. Editing model properties.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
