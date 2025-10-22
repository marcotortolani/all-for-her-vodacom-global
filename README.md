This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Versions

- v1.1.5:
    Se corrige falla en las peticiones, se agrega la categoría "Relaciones" que no estaba en el front

- v1.1.4:
   Se corrige falla con un Suspence en ValidatorProvider

- v1.1.3:
    Se actualiza la version de NextJS a v14.2.12

- v1.1.2:
    Se reactiva el uso de cache
    Se actualiza la version de eslint a v14.0.3
    Se corrige falla en functions.js para categorySlug

- v1.1.1:
    Se modifica el fetch para que sea 100% dinámico y no utilice datos estaticos en cache

- v1.1.0:
    Se elimina las dependencias duplicadas de Html parser
