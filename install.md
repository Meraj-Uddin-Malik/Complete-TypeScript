## TS Configuraion File
This creates a tsconfig.json file. It tells TypeScript how to compile your code.
tsc --init 

## It compiles index.ts to JavaScript only if there are no type errors, preventing generation of faulty JS files.
tsc --noEmitOnError index.ts 

## IT Auto Complie TypeScript File
tsc --watch

ts-node → Runs TypeScript directly.
nodemon → Watches files and restarts automatically when changes occur.

# Auto-run TypeScript with Nodemon and ts-node
This command uses **nodemon** to watch all files with the `.ts` extension in the current folder. Whenever a TypeScript file changes, it automatically executes the file using **ts-node** (without needing to manually compile to JavaScript).

## Command Breakdown

- **`nodemon`** → Watches files and restarts automatically on changes.  
- **`--watch .`** → Watches the current folder.  
- **`--ext ts`** → Only watches `.ts` files.  
- **`--exec "ts-node type_annotation.ts"`** → Runs the TypeScript file directly.

**nodemon --watch . --ext ts --exec "ts-node type_annotation.ts"**


/** 
 * Comments Example
 * Example 1: Simple Addition
 * TODO:  Example 2: Simple Subtraction
 * * Example 3: Simple Multiplication
 * ! Example 4: Simple Division
 * ? Example 5: Simple Modulus
 */ 