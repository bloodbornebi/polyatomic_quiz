// TODO: research into embeding ruby

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
 var ions = [["Ammonium", "NH4+"],["Hydronium", "H3O+"],["Nitrate", "NO3-"], ["Nitrite", "NO2-"], ["Hydroxide", "OH-"], ["Permanganate", "MnO4-"], ["Hydrogen carbonate", "HCO3-"], ["Perchlorate", "ClO4-"], ["Chlorate", "ClO3-"], ["Chlorite", "ClO2-"], ["Hypochlorite", "ClO-"], ["Cyanide", "CN-"], ["Acetate", "C2H3O2-"], ["Thiocynate", "SCN-"], ["Dihydrogen phosphate", "H2PO4-"], ["Hydrogen sulfate", "HSO4-"], ["Perbromate", "BrO4-"], ["Bromate", "BrO3-"], ["Bromite", "BrO2-"], ["Hypobromite", "BrO-"], ["Periodate", "IO4-"], ["Iodate", "IO3-"], ["Hypoiodite", "IO-"], ["Cyanate", "OCN-"], ["Carbonate", "CO3 2-"], ["Dichromate", "Cr2O7 2-"], ["Thiosulfate", "S2O3 2-"], ["Chromate", "CrO4 2-"], ["Hydrogen phosphate", "H2PO4 2-"], ["Oxalate", "C2O4 2-"], ["Sulfate", "SO4 2-"], ["Sulfite", "SO3 2-"], ["Peroxide", "O2 2-"], ["Tartrate", "C4O4O6 2-"], ["Tetraborate", "Br4O7 2-"], ["Hexafluorosilicate", "SiF6 2-"], ["Phosphate", "PO4 3-"], ["Arsenate", "AsO4 3-"], ["Borate", "BO3 3-"], ["Phosphite", "PO3 3-"], ["Hydrogen peroxide", "H2O2"], ["Ammonia", "NH3"], ["Methane", "CH4"], ["Propane", "C3H8"], ["C2H5OH", "Ethanol"], ["HCN", "Hydrocyannic acid"], ["Glucose", "C6H12O6"], ["Nitric oxide", "NO"], ["Phosphine", "PH3"]];
 // TODO: find way to make tab output
 var quiz = "Question &emsp;&emsp; Answer <br>";

 // TODO: Can i generalize this particular loop because I call it twice
 // TODO: This output is ugly AF
 // TODO: Check for duplicates
 // TODO: Append quiz on to the end of the log, reset clears the area
 // TODO: Add ions to names
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
