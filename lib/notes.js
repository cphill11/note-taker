// taken from zookeeper
const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
    let filteredResults = notes;
    // are next 2 if statements useful / adjustable for this project?
    // if (query.age) {
    //   filteredResults = filteredResults.filter(
    //     // Since our form data will be coming in as strings, and our JSON is storing
    //     // age as a number, we must convert the query string to a number to
    //     // perform a comparison:
    //     (note) => note.age === Number(query.age)
    //   );
    // }
    // if (query.favoriteAnimal) {
    //   filteredResults = filteredResults.filter(
    //     (note) => note.favoriteAnimal === query.favoriteAnimal
    //   );
    // }
    if (query.name) {
      filteredResults = filteredResults.filter(
        (note) => note.name === query.name
      );
    }
    return filteredResults;
  }
  
  function findById(id, notes) {
    const result = notes.filter((note) => note.id === id)[0];
    return result;
  }
  
  function createNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      // this path might be wrong!!!
      path.join(__dirname, "../db/notes.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }
  
  function validateNote(note) {
    if (!note.name || typeof note.name !== "string") {
      return false;
    }
    // are next 2 if statements useful / adjustable for this project?
    // if (!note.age || typeof note.age !== "number") {
    //   return false;
    // }
    // if (
    //   !note.favoriteNote ||
    //   typeof note.favoriteNote !== "string"
    // ) {
    //   return false;
    // }
    return true;
  }

// module exports
module.exports = {
  filterByQuery,
  findById,
  createNote,
  validateNote,
};