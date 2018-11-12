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
 var ions = [["Ammonium", "NH4 <sup>+</sup>"],["Hydronium", "H<sub>3</sub>O <sup>+</sup>"],["Nitrate", "NO<sub>3</sub> <sup>-</sup>"], ["Nitrite", "NO<sub>2</sub> <sup>-</sup>"], ["Hydroxide", "OH <sup>-</sup>"], ["Permanganate", "MnO<sub>4</sub> <sup>-</sup>"], ["Hydrogen carbonate", "HCO<sub>3</sub> <sup>-</sup>"], ["Perchlorate", "ClO<sub>4</sub> <sup>-</sup>"], ["Chlorate", "ClO<sub>3</sub> <sup>-</sup>"], ["Chlorite", "ClO<sub>2</sub> <sup>-</sup>"], ["Hypochlorite", "ClO <sup>-</sup>"], ["Cyanide", "CN <sup>-</sup>"], ["Acetate", "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub> <sup>-</sup>"], ["Thiocynate", "SCN <sup>-</sup>"], ["Dihydrogen phosphate", "H<sub>2</sub>PO<sub>4</sub> <sup>-</sup>"], ["Hydrogen sulfate", "HSO4 <sup>-</sup>"], ["Perbromate", "BrO<sub>4</sub> <sup>-</sup>"], ["Bromate", "BrO<sub>3</sub> <sup>-</sup>"], ["Bromite", "BrO<sub>2</sub> <sup>-</sup>"], ["Hypobromite", "BrO <sup>-</sup>"], ["Periodate", "IO<sub>4</sub> <sup>-</sup>"], ["Iodate", "IO<sub>3</sub> <sup>-</sup>"], ["Hypoiodite", "IO <sup>-</sup>"], ["Cyanate", "OCN <sup>-</sup>"], ["Carbonate", "CO<sub>3</sub> 2-"], ["Dichromate", "Cr<sub>2</sub>O<sub>7</sub> 2-"], ["Thiosulfate", "S<sub>2</sub>O<sub>3</sub> 2-"], ["Chromate", "CrO<sub>4</sub> 2-"], ["Hydrogen phosphate", "H<sub>2</sub>PO<sub>4</sub> 2-"], ["Oxalate", "C<sub>2</sub>O<sub>4</sub> 2-"], ["Sulfate", "SO<sub>4</sub> 2-"], ["Sulfite", "SO<sub>3</sub> 2-"], ["Peroxide", "O<sub>2</sub> 2-"], ["Tartrate", "C<sub>4</sub>O<sub>4</sub>O<sub>6</sub> 2-"], ["Tetraborate", "Br<sub>4</sub>O<sub>7</sub> 2-"], ["Hexafluorosilicate", "SiF<sub>6</sub> 2-"], ["Phosphate", "PO<sub>4</sub> <sub>3</sub>-"], ["Arsenate", "AsO<sub>4</sub> <sub>3</sub>-"], ["Borate", "BO<sub>3</sub> <sub>3</sub>-"], ["Phosphite", "PO<sub>3</sub> <sub>3</sub>-"], ["Hydrogen peroxide", "H<sub>2</sub>O<sub>2</sub>"], ["Ammonia", "NH<sub>3</sub>"], ["Methane", "CH<sub>4</sub>"], ["Propane", "C<sub>3</sub>H8"], ["Ethanol", "C<sub>2</sub>H<sub>5</sub>OH"], ["Hydrocyannic acid", "HCN"], ["Glucose", "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"], ["Nitric oxide", "NO"], ["Phosphine", "PH<sub>3</sub>"]];

	var quiza = "Question &emsp;&emsp; Answer <br>";
	// var quiz = [["Question", "Answers"]];

	for (i = 0; i < 5; i++) {
		var index = Math.floor(Math.random() * ions.length);
		//var append = true;

		quiza += "<p>" + ions[index][0] + "&emsp;&emsp;" + ions[index][1] + "<br>" + "</p>";

		//for (t = 0; t < quiz.length; t ++) {
		// 	if (quiz[t + 1][0] == ions[index][0]) {
		//		append = false;
		//	}
		//}
		//if (append) {
		//	quiz[i + 1] = [ions[index][0], ions[index][1]];
		//}
	 }

	for (i = 0; i < 5; i++) {
		var index = Math.floor(Math.random() * ions.length);
		//var append = true;

		quiza += "<p>" + ions[index][1] + "&emsp;&emsp;" + ions[index][0] + "<br>" + "</p>";

		//for (t = 0; t < quiz.length; t ++) {
		//	if (quiz[t + 1][0] == ions[index][0]) {
		//		append = false;
		//	}
		//}
		//if (append) {
		//	quiz[i + 1] = [ions[index][1], ions[index][0]];
		//}
	}
	generate(quiza);
};

function formula() {
};
