# @sushidesu/utils

Summary of frequently written code.

## Installation

```
npm install --save @sushidesu/utils
```

## Examples

```typescript
import { moveElementOfArrayRelatively } from "@sushidesu/utils"

const array = [0, 1, 2, 3, 4]

console.log(moveElementOfArrayRelatively(array, 2, 2))
// -> [0, 1, 3, 4, 2]
console.log(array)
// -> [0, 1, 2, 3, 4]
```

## License

MIT
