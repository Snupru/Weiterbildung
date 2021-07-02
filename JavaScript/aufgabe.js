"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

let success = 0;
let unsuccess = 0;
let load = 0;
launches.forEach(x => {
  if(x["launch_year"] === '2018'){
    if(x["launch_success"]){
      success++;
    }
    else if(x["launch_success"]  === false){
      unsuccess++;
    }
  }
  
});

console.log('Erfolgreich: ' + success);
console.log('Nicht erfolgreich: ' + unsuccess);
// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

let weigth = 0;
launches.forEach(x => {
  if(x["launch_year"] === '2018' && x["launch_success"] === true){
      let payloads = x["rocket"]["second_stage"]["payloads"];
      payloads.forEach(_ => {
        const weigthItem = _["payload_mass_kg"];
      if(weigthItem)
        weigth+=weigthItem;
     })
  }  
});

console.log('Gesamt: ' + weigth + 'Kg');