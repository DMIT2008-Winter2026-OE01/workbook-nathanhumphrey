# Lesson 05 - React Components

## `components/PageHeader.jsx`

This file demonstrates a basic React component (`<PageHeader>`) with a simple prop. Props are passed to React components via the `props` parameter. Individual props can be access via destructuring insied the parameter list for easier access. The `<PageHeader>` component also demonstrates how to conditionally render a part of the UI using the `&&` (**and**) operator.

More information about passing props to components can be found here: https://react.dev/learn/passing-props-to-a-component.

More information about conditional rendering can be found here: https://react.dev/learn/conditional-rendering.

## `components/ActivityForm.jsx`

This file demonstrates a component (`<ActivityForm>`) that utilizes another component to compose its UI. React components can be used in a similar fashion to HTML container elements, where children can be passed to a component via the `children` prop. In this file, the `<Button>` component demonstrates how children may be passed to a component.

More information about passing props as children can be found here: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children.

## `components/ActivititsList.jsx`

This file demonstrates a component (`<AcitivitiesList>`) that renders a list of elements. Rendering lists is made simple by support from React. Simply include an array of React components and React will render them. A common way to render arrays of elements is to use the `Array.map(fn)` function, where  `fn` arg returns a React component. Just ensure that each list component contains a `key` prop for React's virtual DOM, as its necessary for proper component tracking.

More information on rendering lists can be found here: https://react.dev/learn/rendering-lists.

## `components/ui/Button.jsx`

This file demonstrates a component (`<Button>`) that renders `children`. `children` is a special prop that provides access to any JSX or browser elements that may have been nested inside a React component's tags.

More information about passing props as children can be found here: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children.

# Next.js Skeleton

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
