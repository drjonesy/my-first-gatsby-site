import * as React from "react";
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to Gastby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gastby tutorial.</p>
    </main>
  );
}

export const Head = () => <title>Home Page</title>

export default IndexPage