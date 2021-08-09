# jsx-destruct

[![Release Version](https://img.shields.io/npm/v/jsx-destruct.svg)](https://www.npmjs.com/package/jsx-destruct)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This tiny package allows you to unpack values directly in JSX statements. This helps avoid long object references and keeps declarations joined within your components.

## Install

Install the package:

```bash
npm install jsx-destruct
```

## Usage

```js
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import destruct from 'jsx-destruct';

export function SampleComponent () {

  const { isLoading, data } = useQuery('repoData', async () =>
    fetch('https://api.github.com/repos/roydukkey/clean-package')
      .then(async (res) => res.json())
  );

  return (
    <Fragment>
      {isLoading && <p>Loading...</p>}

      {destruct(data, ({ name, description, owner: { login } }) => (
        <Fragment>
          <h1>{name}</h1>
          <h2>by {login}</h2>
          <p>{description}</p>
        </Fragment>
      ))}
    </Fragment>
  );

}
```

## Inspiration

1. jsx-control-statements' [`<With />` component](https://github.com/AlexGilleran/jsx-control-statements#with-tag)
1. Handlebars' builtin [`#with` helper](https://handlebarsjs.com/guide/builtin-helpers.html#with)
