# Waapi technical test

This project is a technical test for Waalaxy company https://www.waalaxy.com/fr/

It is built with Typescript, NextJS, Redux, React Query and Chakra UI, and tested with Cypress.  
CI is handled by GitHub Actions and includes conventional-commits, prettier, eslint and cypress.  
CD is handled by Vercel.

## Design choices

The pages are divided into main components, and core components (like tags list) are reused for scalability.

Each API call is delegated to its consumer component to avoid prop drilling and useless rerendering, and display each information as soon as it is available (like in product details page, similar products are loaded while the product details are already displayed).

Each component displays an accurate and responsive skeleton version of itself during its loading state, and an error message in case of server error. In case of infinite query (home page), skeletons are mounted when there is more available data, and the next products are fetched as soon as the skeleton appears in the user window.

## Tests

Test utils (select, visit, ...) allow tests to be organized in a way to reduce boilerplate and improve readability and scalability.

## Next steps

Next steps could be :

- Add the AXE plugin and associated tests on cypress to check app accessibility
- Improve cypress tests coverage since there is only the home page covered
- Add Storybook, nay Chromatic, to compare visual snapshots across PRs
