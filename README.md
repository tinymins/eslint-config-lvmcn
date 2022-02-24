# eslint-config-lvmcn

> Emil's ESLint config with TypeScript support

## Usage

1. Install config package.

    ```shell
    npm i -D eslint-config-lvmcn
    ```

2. Edit your eslint config file.

    ```js
    // like this
    {
      // ...
      extends: [
        // See possible ${importPath} list in `Requirement` chapter below.
        "lvmcn/${importPath}",
      ],
      // ...
    }

    // For example, if you have a typescript react project:
    {
      // ...
      extends: [
        "lvmcn/javascript/react",
        "rules": {
          // your custom override rules for javascript...
        },
      ],
      overrides: [
        {
          files: ["*.ts", "*.tsx", "*.tx"],
          extends: ["lvmcn/typescript/react"],
          "rules": {
            // your custom override rules for typescript...
          },
        }
      ],
      // ...
    }
    ```

## Requirement

> Different requirements for different languages and plugins.

| Import Path | Plugin |
| ----------- | ------ |
| javascript      | [import](https://www.npmjs.com/package/eslint-plugin-import), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) |
| javascript/base | ~~none~~ |
| javascript/node | [import](https://www.npmjs.com/package/eslint-plugin-import), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [node](https://www.npmjs.com/package/eslint-plugin-node) |
| javascript/react| [import](https://www.npmjs.com/package/eslint-plugin-import), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [react](https://www.npmjs.com/package/eslint-plugin-react) |
| javascript/vue  | [import](https://www.npmjs.com/package/eslint-plugin-import), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [vue](https://www.npmjs.com/package/eslint-plugin-vue) |
| typescript      | [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [import](https://www.npmjs.com/package/eslint-plugin-import), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) |
| typescript/base | [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) |
| typescript/node | [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [import](https://www.npmjs.com/package/eslint-plugin-import), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [node](https://www.npmjs.com/package/eslint-plugin-node) |
| typescript/react| [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [import](https://www.npmjs.com/package/eslint-plugin-import), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [react](https://www.npmjs.com/package/eslint-plugin-react) |
| typescript/vue  | [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort), [import](https://www.npmjs.com/package/eslint-plugin-import), [promise](https://www.npmjs.com/package/eslint-plugin-promise), [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn), [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports), [vue](https://www.npmjs.com/package/eslint-plugin-vue) |
| json            | [json](https://www.npmjs.com/package/eslint-plugin-json) |
| json/base       | [json](https://www.npmjs.com/package/eslint-plugin-json) |
