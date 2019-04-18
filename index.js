// // Reverses a string.
// function reverse(string) {
//     return Array.from(string).reverse().join("");
//   }
  
//   function Phrase(content) {
//     this.content = content;
  
//     this.processor = function(string) {
//       // FILL IN
//     }
  
//     this.processedContent = function processedContent() {
//       return this.processor(this.content);
//     }
  
//     // Returns true if the phrase is a palindrome, false otherwise.
//     this.palindrome = function palindrome() {
//       return this.processedContent() === reverse(this.processedContent());
//     }
//   }
  
//   function TranslatedPhrase(content, translation) {
//     this.content = content;
//     this.translation = translation;
  
//     // Returns translation processed for palindrome testing.
//     this.processedContent = function processedContent() {
//       return this.processor(this.translation);
//     }
//   }
//   TranslatedPhrase.prototype = new Phrase();


module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    // let theLetters = [];
    // const letterRegex = /[a-z]/i;
    // Array.from(this.content).forEach(function(character) {
    //   if (character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // });
    // for (let i = 0; i < this.content.length; i++) {
    //   let character = this.content.charAt(i);
    //   if (character.match(/[a-zA-Z]/)) {
    //     theLetters.push(character);
    //   }
    // }
    //return theLetters.join("");
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}