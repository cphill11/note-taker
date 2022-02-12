const fs = require("fs");
const path = require("path");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const readFileAsynch = util.promisify(fs.readFile);
const writeFileAsynch = util.promisify(fs.writeFile);

class getNewNotes {
  async read() {
    let data = await readFileAsynch(
      path.join(__dirname, "../db/db.json"),
      "utf-8"
    );
    return JSON.parse(data);
  }
  async write(note) {
    let data = await this.read();
    note.id = uuidv4();
    data.push(note);
    let writeToFile = await writeFileAsynch(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(data)
    );
    return writeToFile;
  }

  getNotes() {
    return new Promise((resolve, reject) => {
      this.read().then((notes) => {
        let parseNotes;
        try {
          parseNotes = [].concat(JSON.parse(notes));
        } catch (error) {
          parseNotes = [];
        }
        resolve(parseNotes);
      });
    });
  }

  async deleteNotes(id) {
    let data = await this.read();

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
      }
    }
    let writeToFile = await writeFileAsynch(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(data)
    );
    return writeToFile;
  }
}

module.exports = new getNewNotes();
