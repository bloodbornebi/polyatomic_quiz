// TODO: research into embeding ruby

function reset() {
 document.getElementById("hidden").style.display = "none";
 generate("Reset")
};

function generate(content) {
 var quiza = document.getElementById("quiz");
 quiza.innerHTML = content;
};

function showButtons() {
 document.getElementById("hidden").style.display = "block";
};

function pai() {
// TODO: this is super ugly, can i fix?
// FIXME: charges don't actually display above ion like they should
 var ions = [["Ammonium", "NH4<sup>+</sup>"],["Hydronium", "H3O<sup>+</sup>"],["Nitrate", "NO3<sup>-</sup>"], ["Nitrite", "NO2<sup>-</sup>"], ["Hydroxide", "OH<sup>-</sup>"], ["Permanganate", "MnO4<sup>-</sup>"], ["Hydrogen carbonate", "HCO3<sup>-</sup>"], ["Perchlorate", "ClO4<sup>-</sup>"], ["Chlorate", "ClO3<sup>-</sup>"], ["Chlorite", "ClO2<sup>-</sup>"], ["Hypochlorite", "ClO<sup>-</sup>"], ["Cyanide", "CN<sup>-</sup>"], ["Acetate", "C2H3O2<sup>-</sup>"], ["Thiocynate", "SCN<sup>-</sup>"], ["Dihydrogen phosphate", "H2PO4<sup>-</sup>"], ["Hydrogen sulfate", "HSO4<sup>-</sup>"], ["Perbromate", "BrO4<sup>-</sup>"], ["Bromate", "BrO3<sup>-</sup>"], ["Bromite", "BrO2<sup>-</sup>"], ["Hypobromite", "BrO<sup>-</sup>"], ["Periodate", "IO4<sup>-</sup>"], ["Iodate", "IO3<sup>-</sup>"], ["Hypoiodite", "IO<sup>-</sup>"], ["Cyanate", "OCN<sup>-</sup>"], ["Carbonate", "CO3 2-"], ["Dichromate", "Cr2O7 2-"], ["Thiosulfate", "S2O3 2-"], ["Chromate", "CrO4 2-"], ["Hydrogen phosphate", "H2PO4 2-"], ["Oxalate", "C2O4 2-"], ["Sulfate", "SO4 2-"], ["Sulfite", "SO3 2-"], ["Peroxide", "O2 2-"], ["Tartrate", "C4O4O6 2-"], ["Tetraborate", "Br4O7 2-"], ["Hexafluorosilicate", "SiF6 2-"], ["Phosphate", "PO4 3-"], ["Arsenate", "AsO4 3-"], ["Borate", "BO3 3-"], ["Phosphite", "PO3 3-"], ["Hydrogen peroxide", "H2O2"], ["Ammonia", "NH3"], ["Methane", "CH4"], ["Propane", "C3H8"], ["Ethanol", "C2H5OH"], ["Hydrocyannic acid", "HCN"], ["Glucose", "C6H12O6"], ["Nitric oxide", "NO"], ["Phosphine", "PH3"]];

 var quiza = "Question &emsp;&emsp; Answer <br>";
 var quiz = [["Question", "Answers"]];

 // TODO: Can i generalize this particular loop because I call it twice
 for (i = 0; i < 5; i++) {
  var index = Math.floor(Math.random() * ions.length)
  var append = true;
  quiza += ions[index][0] + "&emsp;&emsp;" + ions[index][1] + "<br>";
  for (t = 0; t < quiz.length; t ++) {
    if (quiz[t + 1][0] == ions[index][0]) {
      append = false;
    }
  }
  if (append) {
    quiz[i + 1] = [ions[index][0], ions[index][1]];
  }
 }

 for (i = 0; i < 5; i++) {
  var index = Math.floor(Math.random() * ions.length)
  var append = true;
  quiza += ions[index][1] + "&emsp;&emsp;" + ions[index][0] + "<br>";
  for (t = 0; t < quiz.length; t ++) {
    if (quiz[t + 1][0] == ions[index][0]) {
      append = false;
    }
  }
  if (append) {
    quiz[i + 1] = [ions[index][1], ions[index][0]];
  }
 }
 generate(quiza);
};

function formula() {
};
