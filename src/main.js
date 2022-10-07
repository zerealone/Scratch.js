/* 
Made By ZeRealOne© 2022
All Rights Reserved
*/

function tolower(value){ //We must create a new function to convert a string to lowercase, because of many errors without it.
 return ("" +  value).toLowerCase();
}

function toupper(value){ //We must create a new function to convert a string to uppercase, because of many errors without it.
 return ("" + value).toUpperCase();
}

class Main { //The toLowercase block
  getInfo () { //The info of the blocks
    return {
      id: 'toLowercase',
      name: 'Scratch.js',
      blocks: [
        {
          opcode: 'ToLowercase', //The opcode here is used also to add a script that will do something when this block is used
          blockType: Scratch.BlockType.REPORTER, //The block type
          text: 'toLowercase [TEXT]', //The block text, which have the arguments and all
          arguments: {
            TEXT: { //The argument we just added
              type: Scratch.ArgumentType.STRING, //The type is string, because it also work with number in the string
              defaultValue: 'HELLO WORLD!' //The deafult value of the argument in the block.
            }
          }
        },
        {
          opcode: 'ToUppercase',
          blockType: Scratch.BlockType.REPORTER, //The block type
          text: 'toUppercase [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello world!'
            }
          }
        },
        {
          opcode: 'fetchBlock', //A fetch function that fetch API and return the data
          blockType: Scratch.BlockType.REPORTER,
          text: 'FETCH [URL]', //The block format
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              deafultValue: 'https://api.scratch.mit.edu'
            }
          }
        },
        {
          opcode: 'log',
          blockType: Scratch.BlockType.REPORTER,
          text: 'log [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              deafultValue: 'Hello World!'
            }
          }
        }
      ]
    };
  }

  ToLowercase (args) {
    return tolower(args.TEXT); //Converts the input of the block to lowercase
  }
 
  ToUppercase (args) {
    return toupper(args.TEXT) //Converts the input of the block to uppercase
  }

  fetchBlock (args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }

  log (args) {
    console.log(args.TEXT);
    return "Open Developer Tools To See The Message!"
  }
}

Scratch.extensions.register(new Main()); //Adding the blocks
