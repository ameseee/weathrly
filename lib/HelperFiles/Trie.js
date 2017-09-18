const Node = require('./Node');
const CityList = require('./CityList');

class Trie {
  constructor() {
    this.root = new Node;
    this.count = 0;
  }

  populate(dictionary) {
    dictionary.forEach( word => {
      this.insert(word);
    })
  }

  insert(word) {
    let splitData = [...word.toLowerCase()];
    let currentNode = this.root;

    if (!this.root) {
      this.root;
    }

    splitData.forEach((letter) => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    });

    if (!currentNode.isCompleteWord) {
      currentNode.isCompleteWord = true
      this.count++;
    }
  }

  countWords() {
    return this.count;
  }

  suggest(data) {
    let input = data.toLowerCase();
    let currentNode = this.findNode(input);
    let suggestions = [];

    if (currentNode === 'does not exist') {
      return [];
    }

    if (!input) {
      return 'you have to enter something!';
    }

    this.findChildrenWords(input, currentNode, suggestions);

    return suggestions.sort( (a, b) => {
      return b.frequency - a.frequency;
    }).reduce( (newArray, object) => {
      newArray.push(object.word);
      return newArray;
    }, []);
  }

  findNode(data) {
    let currentNode = this.root;
    let input = [...data];

    input.forEach( letter => {
      if (!currentNode.children[letter]) {
        currentNode = 'does not exist';
        return;
      }
      currentNode = currentNode.children[letter];
    });

    return currentNode;
  }

  findChildrenWords(data, currentNode, suggestions) {
    let keys = Object.keys(currentNode.children);

    keys.forEach( key => {
      let completeWord = data + key;

      if (currentNode.children[key].isCompleteWord === true) {
        suggestions.push( {word: completeWord, frequency: currentNode.children[key].frequency} );
      }

      if (currentNode.children) {
        this.findChildrenWords(completeWord, currentNode.children[key], suggestions);
      }
    });
    return suggestions;
  }

  select(selection) {
    const newString = [...selection];
    let currentNode = this.root;
    let node = this.findNode(newString, currentNode);

    node.isCompleteWord ? node.frequency++ : null;
  }

}

module.exports = Trie;
