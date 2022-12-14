// deno-lint-ignore-file no-unused-vars

import { _readefi } from "./bootlib.ts"

// deno-lint-ignore prefer-const
let file = []
const build = 0.01
// deno-lint-ignore prefer-const
let IsSboot = _readefi()
console.log(IsSboot)
