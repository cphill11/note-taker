const fs = require('fs');
const path = require('path');
const util = require('util');
const uuid = require('uuid');

const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);

class getNewNotes {
  async read() {
    let data = await (readFileAsynch(path.join(__dirname, '../db/db.json'), "utf-8"));
    return JSON.parse(data);
  }
  async write(note) {
    let data = await this.read()
    console.log(data)
    data.push(note);
    let writeToFile = await writeFileAsynch(path.join(__dirname,'../db/db.json'), JSON.stringify(note))
    return writeToFile
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