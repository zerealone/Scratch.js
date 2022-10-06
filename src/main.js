/* 
Made By ZeRealOne© 2022
All Rights Reserved
*/

function tolower(value){ //We must create a new function to convert a string to lowercase, because of many errors without it.
 return ("" +  value).toLowerCase();
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
        }
      ]
    };
  }

  ToLowercase (args) {
    return tolower(args.TEXT); //Converts the input of the block to lowercase
  }
}

Scratch.extensions.register(new Main()); //Adding the blocks
