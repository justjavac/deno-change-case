# Change Case

Convert strings between `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

All methods support Unicode (non-ASCII characters) and non-string entities, such as objects with a `toString` property, numbers and booleans. Empty values (`null` and `undefined`) will result in an empty string.

**Source code based on [blakeembrey/change-case](https://github.com/blakeembrey/change-case) with TypeScript.**

## Usage

```ts
import { camelCase } from "https://raw.githubusercontent.com/justjavac/deno-change-case/master/mod.ts";
camelCase("test string");
// => 'testString'
```

or

```ts
import camelCase from "https://raw.githubusercontent.com/justjavac/deno-change-case/master/camelCase.ts";
camelCase("test string");
// => 'testString'
```

**Available methods** (short-hand shown below, long-hand available in examples):

- [x] [`camel`](#camelcase)
- [x] [`constant`](#constantcase)
- [x] [`dot`](#dotcase)
- [x] [`header`](#headercase)
- [x] [`lower`](#lowercase)
- [x] [`lowerFirst`](#lowerfirstcase)
- [x] [`normal`](#normalcase)- aliases: [`no`, `clear`]
- [x] [`param`](#paramcase) - aliases: [`kebab`, `hyphen`]
- [x] [`pascal`](#pascalcase)
- [x] [`path`](#pathcase)
- [x] [`sentence`](#sentencecase)
- [x] [`snake`](#snakecase)
- [ ] [`swap`](#swapcase)
- [x] [`title`](#titlecase)
- [x] [`upper`](#uppercase)
- [x] [`upperFirst`](#upperfirstcase)

All methods accept two arguments, the string to change case and an optional locale.

### camelCase

Return as a string with the separators denoted by having the next letter capitalized.

```ts
camelCase("test string");
//=> "testString"
```

### constantCase

Return as an upper case, underscore separated string.

```ts
constantCase("test string");
//=> "TEST_STRING"
```

### dotCase

Return as a lower case, period separated string.

```ts
dotCase("test string");
//=> "test.string"
```

### headerCase

Return as a title cased, dash separated string.

```ts
headerCase("test string");
//=> "Test-String"
```

### lowerCase

Return the string in lower case.

```ts
lowerCase("TEST STRING");
//=> "test string"
```

### lowerFirstCase

Return the string with the first character lower cased.

```ts
lowerFirstCase("TEST");
//=> "tEST"
```

### normalCase

- `no`
- `clear`

Return the string without any casing (lower case, space separated).

```js
normalCase("test string");
//=> "test string"
```

### paramCase

#### Aliases

- `kebabCase`
- `hyphenCase`

Return as a lower case, dash separated string.

```ts
paramCase("test string");
//=> "test-string"
```

### pascalCase

Return as a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```ts
pascalCase("test string");
//=> "TestString"
```

### pathCase

Return as a lower case, slash separated string.

```ts
pathCase("test string");
//=> "test/string"
```

### sentenceCase

Return as a lower case, space separated string with the first letter upper case.

```ts
sentenceCase("testString");
//=> "Test string"
```

### snakeCase

Return as a lower case, underscore separated string.

```ts
snakeCase("test string");
//=> "test_string"
```

### swapCase

Return as a string with every character case reversed.

```ts
swapCase("Test String");
//=> "tEST sTRING"
```

### titleCase

Return as a space separated string with the first character of every word upper cased.

```ts
titleCase("a simple test");
//=> "A Simple Test"
```

### upperCase

Return the string in upper case.

```ts
upperCase("test string");
//=> "TEST STRING"
```

### upperFirstCase

Return the string with the first character upper cased.

```ts
upperFirstCase("test");
//=> "Test"
```

### Credits

- [justjavac](https://github.com/justjavac)

### License

deno-change-case is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
