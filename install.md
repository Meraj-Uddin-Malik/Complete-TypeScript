## TS Configuraion File
This creates a tsconfig.json file. It tells TypeScript how to compile your code.
tsc --init 

## It compiles index.ts to JavaScript only if there are no type errors, preventing generation of faulty JS files.
tsc --noEmitOnError index.ts 
