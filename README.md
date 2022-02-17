# aitu-lang
Aitu - an unreadable "programming language" that is usable for every programming language

# Usage
To run a file:
```
aitu node test.aitu
```
You can also add CLI arguments:
```
aitu node argv.aitu --test
```
To add arguments before the file:
```
aitu "node --print-bytecode" argv.aitu --test
```
To translate a file to Aitu:
```
aitu-translate hello_world.js
```
File output will be hello_world.aitu.

# Can you write in this universal programming language by hand?
Yes, but it is hard. First, you have to memorize your ASCII char code table, as it is the heart of the project. Whatever letters you want to write, have to be 5 plus the original char code.
So for example, A would be 65. 65 + 5 would be 70, and the char code for 70 is F.
