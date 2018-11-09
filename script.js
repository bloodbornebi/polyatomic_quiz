function reset() {
 document.getElementById("hidden").style.display = "none";
 generate("Reset")
};

function generate(content) {
 var quiz = document.getElementById("quiz");
 quiz.innerHTML = content;
};

function showButtons() {
 document.getElementById("hidden").style.display = "block";
};

function pai() {
 // TODO: Fix charge type output
 // TODO: Finish adding ions
 var ions = [["Ammonium", "NH4+"],["Hydronium", "H3O+"],["Nitrate", "NO3-"], ["Nitrite", "NO2-"], ["Hydroxide", "OH-"], ["Permanganate", "MnO4-"], ["Hydrogen carbonate", "HCO3-"], ["Perchlorate", "ClO4-"], ["Chlorate", "ClO3-"], ["Chlorite", "ClO2-"], ["Hypochlorite", "ClO-"], ["Cyanide", "CN-"], ["Acetate", "C2H3O2-"], ["Thiocynate", "SCN-"], ["Dihydrogen phosphate", "H2PO4-"], ["Hydrogen sulfate", "HSO4-"], ["Perbromate", "BrO4-"], ["Bromate", "BrO3-"], ["Bromite", "BrO2-"], ["Hypobromite", "BrO-"], ["Periodate", "IO4-"], ["Iodate", "IO3-"]];
 // TODO: find way to make tab output
 var quiz = "Question &emsp;&emsp; Answer <br>";

 // TODO: Can i generalize this particular loop because I call it twice
 // TODO: This output is ugly AF
 // TODO: Check for duplicates
 // TODO: Append quiz on to the end of the log, reset clears the area
 for (i = 0; i < 5; i++) {
  var index = Math.floor(Math.random() * ions.length)
  quiz += ions[index][0] + "&emsp;&emsp;" + ions[index][1] + "<br>";
 }
 for (i = 0; i < 5; i++) {
  var index = Math.floor(Math.random() * ions.length)
  quiz += ions[index][1] + "&emsp;&emsp;" + ions[index][0] + "<br>";
 }
 generate(quiz);
};

// TODO: make This
function formula() {
};
