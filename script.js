function reset() {
 document.getElementById("hidden").style.display = "none";
 generate("Reset")
};

function generate(content) {
 var result = document.getElementById("quiz");
 result.innerHTML = content;
};

function showButtons() {
 document.getElementById("hidden").style.display = "block";
};

function pai() {
	var ions = [["Test one", "T1"], ["Test two", "T2"]];
 // var ions = [["Ammonium", "NH4 <sup>+</sup>"],["Hydronium", "H<sub>3</sub>O <sup>+</sup>"],["Nitrate", "NO<sub>3</sub> <sup>-</sup>"], ["Nitrite", "NO2 <sup>-</sup>"], ["Hydroxide", "OH <sup>-</sup>"], ["Permanganate", "MnO4 <sup>-</sup>"], ["Hydrogen carbonate", "HCO<sub>3</sub> <sup>-</sup>"], ["Perchlorate", "ClO4 <sup>-</sup>"], ["Chlorate", "ClO<sub>3</sub> <sup>-</sup>"], ["Chlorite", "ClO2 <sup>-</sup>"], ["Hypochlorite", "ClO <sup>-</sup>"], ["Cyanide", "CN <sup>-</sup>"], ["Acetate", "C2H<sub>3</sub>O2 <sup>-</sup>"], ["Thiocynate", "SCN <sup>-</sup>"], ["Dihydrogen phosphate", "H2PO4 <sup>-</sup>"], ["Hydrogen sulfate", "HSO4 <sup>-</sup>"], ["Perbromate", "BrO4 <sup>-</sup>"], ["Bromate", "BrO<sub>3</sub> <sup>-</sup>"], ["Bromite", "BrO2 <sup>-</sup>"], ["Hypobromite", "BrO <sup>-</sup>"], ["Periodate", "IO4 <sup>-</sup>"], ["Iodate", "IO<sub>3</sub> <sup>-</sup>"], ["Hypoiodite", "IO <sup>-</sup>"], ["Cyanate", "OCN <sup>-</sup>"], ["Carbonate", "CO<sub>3</sub> 2-"], ["Dichromate", "Cr2O7 2-"], ["Thiosulfate", "S2O<sub>3</sub> 2-"], ["Chromate", "CrO4 2-"], ["Hydrogen phosphate", "H2PO4 2-"], ["Oxalate", "C2O4 2-"], ["Sulfate", "SO4 2-"], ["Sulfite", "SO<sub>3</sub> 2-"], ["Peroxide", "O2 2-"], ["Tartrate", "C4O4O6 2-"], ["Tetraborate", "Br4O7 2-"], ["Hexafluorosilicate", "SiF6 2-"], ["Phosphate", "PO4 <sub>3</sub>-"], ["Arsenate", "AsO4 <sub>3</sub>-"], ["Borate", "BO<sub>3</sub> <sub>3</sub>-"], ["Phosphite", "PO<sub>3</sub> <sub>3</sub>-"], ["Hydrogen peroxide", "H2O2"], ["Ammonia", "NH<sub>3</sub>"], ["Methane", "CH4"], ["Propane", "C<sub>3</sub>H8"], ["Ethanol", "C2H5OH"], ["Hydrocyannic acid", "HCN"], ["Glucose", "C6H12O6"], ["Nitric oxide", "NO"], ["Phosphine", "PH<sub>3</sub>"]];

	var quiza = "Question &emsp;&emsp; Answer <br>";
	generate(quiza);
	var quiz = [["Question", "Answers"]];

 for (i = 0; i < 5; i++) {
	var index = Math.floor(Math.random() * ions.length)
	var append = true;

	quiza << ions[index][0] + "&emsp;&emsp;" + ions[index][1] + "<br>";
	generate(quiza);

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
 //var result = document.getElementById("quiz");
 //result.innerHTML = quiza;
 //generate(quiza);
};

function formula() {
};
