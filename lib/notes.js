const fs = require('fs');
const path = require('path');
const util = require('util');
const uuid = require('uuid');

const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);

class getNewNotes {
  read() {
    return readFileAsynch('../db/db.json', "utf-8");
  }
  write(note) {
    return writeFileAsynch('../db/db.json', JSON.stringify(note));
  }
  
  getNotes() {
    return new Promise((resolve, reject)=>{
    this.read()
    .then((notes) => {
      let parseNotes;
      try {
        parseNotes = [].concat(JSON.parse(notes));
      }
      catch (error) {
        parseNotes = [];
      }
      resolve(parseNotes);
    })
  })
 }
}

module.exports = new getNewNotes();