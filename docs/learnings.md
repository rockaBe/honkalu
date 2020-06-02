# What to know about nextjs

## Main benefits

- Hot Code Reloading (**Development**)
- Automatic Routing
  Any URL is mapped to the filesystem, to files put in the pages folder, and you don't need any configuration (you have customization options of course).

- Single File Components
  Using styled-jsx, completely integrated as built by the same team, it's trivial to add styles scoped to the component.

- Server Rendering
You can render React components on the server before sending the HTML to the client.

- suits into react and JS ecosystem
Next.js plays well with the rest of the JavaScript, Node, and React ecosystem.

- Automatic Code Splitting
Pages are rendered with just the libraries and JavaScript that they need, no more. Instead of generating one single JavaScript file containing all the app code, the app is broken up automatically by Next.js in several different resources.

## Different ways to render a page

- λ  (Server)
server-side renders at runtime (uses `getInitialProps` or `getServerSideProps`)
- ○  (Static)
automatically rendered as static HTML (uses no initial props)
- ●  (SSG)
automatically generated as static HTML + JSON (uses `getStaticProps`)

## Questions I want to get answered
