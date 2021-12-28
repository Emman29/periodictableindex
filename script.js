//create object template
function Element(symbol, category, name, number, mass, energylevels, melting, boiling, en, ea, group, period, about) {
  this.symbol = symbol;
  this.category = category;
  this.name = name;
  this.number = number;
  this.mass = mass;
  //
  this.energylevels = energylevels;
  this.melting = melting;
  this.boiling = boiling;
  this.electronegativity = en;
  this.electronaffinity = ea;
  this.period = period;
  this.group = group;
  this.about = about;


}
//Store
var h = new Element('H', 'Reactive nonmetals', 'Hydrogen', 1, 1.008, "1", "-259.1degC", "-252.9degC", 2.20, "72.8 KJ/mol", 1, 1,"Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in the plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has one proton and no neutrons.");
var li = new Element('Li', 'Alkali metals', 'Lithium', 3, 6.94, "2, 1", "180.54degC", "1342degC", 0.98, "59.6 KJ/mol", 1, 2,"Lithium is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in mineral oil. When cut, it exhibits a metallic luster, but moist air corrodes it quickly to a dull silvery gray, then black tarnish. It never occurs freely in nature, but only in (usually ionic) compounds, such as pegmatitic minerals, which were once the main source of lithium. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines.");
var na = new Element('Na', 'Alkali metals', 'Sodium', 11, 22.990, "2, 8, 1", "97.720degC", "882.9degC", 0.93, "52.8 KJ/mol", 1, 3,"Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is 23Na. The free metal does not occur in nature, and must be prepared from compounds. Sodium is the sixth most abundant element in the Earth's crust and exists in numerous minerals such as feldspars, sodalite, and rock salt (NaCl). Many salts of sodium are highly water-soluble: sodium ions have been leached by the action of water from the Earth's minerals over eons, and thus sodium and chlorine are the most common dissolved elements by weight in the oceans.");
var k = new Element('K', 'Alkali metals', 'Potassium', 19, 39.098, "2, 8, 8, 1", "63.380degC", "758.9degC", 0.82, "48.4 KJ/mol", 1, 4,"Potassium is a chemical element with the symbol K (from Neo-Latin kalium) and atomic number 19. Potassium is a silvery-white metal that is soft enough to be cut with a knife with little force. Potassium metal reacts rapidly with atmospheric oxygen to form flaky white potassium peroxide in only seconds of exposure. It was first isolated from potash, the ashes of plants, from which its name derives. In the periodic table, potassium is one of the alkali metals, all of which have a single valence electron in the outer electron shell, that is easily removed to create an ion with a positive charge – a cation, that combines with anions to form salts. Potassium in nature occurs only in ionic salts. Elemental potassium reacts vigorously with water, generating sufficient heat to ignite hydrogen emitted in the reaction, and burning with a lilac-colored flame. It is found dissolved in sea water (which is 0.04% potassium by weight), and occurs in many minerals such as orthoclase, a common constituent of granites and other igneous rocks.");
var rb = new Element('Rb', 'Alkali metals', 'Rubidium', 37, 85.468, "2, 8, 18, 8, 1", "39.310degC", "688degC", 0.82, "46.9 KJ/mol", 1, 5,"Rubidium is the chemical element with the symbol Rb and atomic number 37. Rubidium is a very soft, silvery-white metal in the alkali metal group. Rubidium metal shares similarities to potassium metal and caesium metal in physical appearance, softness and conductivity. Rubidium cannot be stored under atmospheric oxygen, as a highly exothermic reaction will ensue, sometimes even resulting in the metal catching fire.");
var cs = new Element('Cs', 'Alkali metals', 'Caesium', 55, 132.91, "2, 8, 18, 18, 8, 1", "28.440degC", "671degC", 0.79, "45.5 KJ/mol", 1, 6,"Caesium (also spelled cesium in American English) is a chemical element with the symbol Cs and atomic number 55. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C (83.3 °F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium has physical and chemical properties similar to those of rubidium and potassium. The most reactive of all metals, it is pyrophoric and reacts with water even at −116 °C (−177 °F). It is the least electronegative element, with a value of 0.79 on the Pauling scale. It has only one stable isotope, caesium-133. Caesium is mined mostly from pollucite, while the radioisotopes, especially caesium-137, a fission product, are extracted from waste produced by nuclear reactors.");
var fr = new Element('Fr', 'Alkali metals', 'Francium', 87, '(223)', "2, 8, 18, 32, 18, 8, 1", "29.90degC", "650degC", 0.70, "N/A", 1, 7,"Francium is a chemical element with the symbol Fr and atomic number 87. Prior to its discovery, it was referred to as eka-caesium. It is extremely radioactive; its most stable isotope, francium-223 (originally called actinium K after the natural decay chain it appears in), has a half-life of only 22 minutes. It is the second-most electropositive element, behind only caesium, and is the second rarest naturally occurring element (after astatine). The isotopes of francium decay quickly into astatine, radium, and radon. The electronic structure of a francium atom is [Rn] 7s1, and so the element is classed as an alkali metal.");
//this will prove to be time consuming.
var be = new Element('Be', 'Alkaline earth metals', 'Beryllium', 4, 9.0122, "2, 2", "1287degC", "2470degC", 1.57, "0 KJ/mol", 2, 2,"Beryllium is a chemical element with the symbol Be and atomic number 4. It is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays. Within the cores of stars, beryllium is depleted as it is fused into heavier elements. It is a divalent element which occurs naturally only in combination with other elements in minerals. Notable gemstones which contain beryllium include beryl (aquamarine, emerald) and chrysoberyl. As a free element it is a steel-gray, strong, lightweight and brittle alkaline earth metal.");
var mg = new Element('Mg', 'Alkaline earth metals', 'Magnesium', 12, 24.305, "2, 8, 2", "650degC", "1090degC", 1.31, "0 KJ/mol", 2, 3,"Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (group 2, or alkaline earth metals) of the periodic table: all group 2 elements have the same electron configuration in the outer electron shell and a similar crystal structure.");
var ca = new Element('Ca', 'Alkaline earth metals', 'Calcium', 20, 40.078, "2, 8, 8, 2", "841.9degC", "1484degC", 1.00, "2.37 KJ/mol", 2, 4,"Calcium is a chemical element with the symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air. Its physical and chemical properties are most similar to its heavier homologues strontium and barium. It is the fifth most abundant element in Earth's crust, and the third most abundant metal, after iron and aluminium. The most common calcium compound on Earth is calcium carbonate, found in limestone and the fossilised remnants of early sea life; gypsum, anhydrite, fluorite, and apatite are also sources of calcium. The name derives from Latin calx 'lime', which was obtained from heating limestone.");
var sr = new Element('Sr', 'Alkaline earth metals', 'Strontium', 38, 87.62, "2, 8, 18, 8, 2", "776.9degC", "1382degC", 0.95, "5.03 KJ/mol", 2, 5,"Strontium is the chemical element with the symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive. The metal forms a dark oxide layer when it is exposed to air. Strontium has physical and chemical properties similar to those of its two vertical neighbors in the periodic table, calcium and barium. It occurs naturally mainly in the minerals celestine and strontianite, and is mostly mined from these.");
var ba = new Element('Ba', 'Alkaline earth metals', 'Barium', 56, 137.33, "2, 8, 18, 18, 8, 2", "730degC", "1870degC", 0.89, "13.95 KJ/mol", 2, 6,"Barium is a chemical element with the symbol Ba and atomic number 56. It is the fifth element in group 2 and is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium is never found in nature as a free element.");
var ra = new Element('Ra', 'Alkaline earth metals', 'Radium', 88, '(226)', "2, 8, 18, 32, 18, 8, 2", "700degC", "1737degC", 0.90, "509.0 KJ/mol", 2, 7,"Radium is a chemical element with the symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is silvery-white, but it readily reacts with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2). All isotopes of radium are highly radioactive, with the most stable isotope being radium-226, which has a half-life of 1600 years and decays into radon gas (specifically the isotope radon-222). When radium decays, ionizing radiation is a product, which can excite fluorescent chemicals and cause radioluminescence.");
var sc = new Element('Sc', 'Transition metals', 'Scandium', 21, 44.956);
var y = new Element('Y', 'Transition metals', 'Yttrium', 39, 88.906);
var ti = new Element('Ti', 'Transition metals', 'Titanium', 22, 47.867);
var zr = new Element('Zr', 'Transition metals', 'Zirconium', 40, 91.224);
var hf = new Element('Hf', 'Transition metals', 'Hafnium', 72, 178.49);
var rf = new Element('Rf', 'Transition metals', 'Rutherfordium', 104, '(267)');
var v = new Element('V', 'Transition metals', 'Vanadium', 23, 50.942);
var nb = new Element('Nb', 'Transition metals', 'Niobium', 41, 92.906);
var ta = new Element('Ta', 'Transition metals', 'Tantalum', 73, 180.95);
var db = new Element('Db', 'Transition metals', 'Dubnium', 105, '(268)');
var cr = new Element('Cr', 'Transition metals', 'Chromium', 24, 51.996);
var mo = new Element('Mo', 'Transition metals', 'Molybdenum', 42, 95.95);
var w = new Element('W', 'Transition metals', 'Tungsten', 74, 183.83);
var sg = new Element('Sg', 'Transition metals', 'Seaborgium', 106, '(269)');
var mn = new Element('Mn', 'Transition metals', 'Manganese', 25, 54.938);
var tc = new Element('Tc', 'Transition metals', 'Technetium', 43, '(98)');
var re = new Element('Re', 'Transition metals', 'Rhenium', 75, 186.21);
var bh = new Element('Bh', 'Transition metals', 'Bohrium', 107, '(270)');
var fe = new Element('Fe', 'Transition metals', 'Iron', 26, 55.845);
var ru = new Element('Ru', 'Transition metals', 'Ruthenium', 44, 101.07);
var os = new Element('Os', 'Transition metals', 'Osmium', 76, 190.23);
var hs = new Element('Hs', 'Transition metals', 'Hassium', 108, '(277)');
var co = new Element('Co', 'Transition metals', 'Cobalt', 27, 58.933);
var rh = new Element('Rh', 'Transition metals', 'Rhodium', 45, 102.91);
var ir = new Element('Ir', 'Transition metals', 'Iridium', 77, 192.22);
var ni = new Element('Ni', 'Transition metals', 'Nickel', 28, 58.693);
var pd = new Element('Pd', 'Transition metals', 'Palladium', 46, 106.42);
var pt = new Element('Pt', 'Transition metals', 'Platinum', 78, 195.08);
var cu = new Element('Cu', 'Transition metals', 'Copper', 29, 63.546);
var ag = new Element('Ag', 'Transition metals', 'Silver', 47, 107.87);
var au = new Element('Au', 'Transition metals', 'Gold', 79, 196.97);
var zn = new Element('Zn', 'Transition metals', 'Zinc', 30, 65.38);
var cd = new Element('Cd', 'Transition metals', 'Cadmium', 48, 112.41);
var hg = new Element('Hg', 'Transition metals', 'Mercury', 80, 200.56);
var b = new Element('B', 'Metalloids', 'Boron', 5, 10.81);
var si = new Element('Si', 'Metalloids', 'Silicon', 14, 28.085);
var ge = new Element('Ge', 'Metalloids', 'Germanium', 32, 72.630);
var as = new Element('As', 'Metalloids', 'Arsenic', 33, 74.922);
var sb = new Element('Sb', 'Metalloids', 'Antimony', 51, 121.76);
var te = new Element('Te', 'Metalloids', 'Tellurium', 52, 127.76);
var at = new Element('At', 'Metalloids', 'Astatine', 85, '(210)');
var al = new Element('Al', 'Post-transition metals', 'Aluminum', 13, 26.982);
var ga = new Element('Ga', 'Post-transition metals', 'Gallium', 31, 69.723);
var in_ = new Element('In', 'Post-transition metals', 'Indium', 49, 114.82);
var tl = new Element('Tl', 'Post-transition metals', 'Thaillium', 81, 204.38);
var sn = new Element('Sn', 'Post-transition metals', 'Tin', 50, 118.71);
var pb = new Element('Pb', 'Post-transition metals', 'Lead', 82, 207.2);
var bi = new Element('Bi', 'Post-transition metals', 'Bismuth', 83, 208.98);
var po = new Element('Po', 'Post-transition metals', 'Polonium', 84, '(209)');
var c = new Element('C', 'Reactive nonmetals', 'Carbon', 6, 12.011);
var n = new Element('N', 'Reactive nonmetals', 'Nitrogen', 7, 14.007);
var o = new Element('O', 'Reactive nonmetals', 'Oxygen', 8, 15.999);
var f = new Element('F', 'Reactive nonmetals', 'Flourine', 7, 14.007);
var p = new Element('P', 'Reactive nonmetals', 'Phosphorus', 15, 30.974);
var s = new Element('S', 'Reactive nonmetals', 'Sulfur', 16, 32.06);
var cl = new Element('Cl', 'Reactive nonmetals', 'Chlorine', 17, 35.45);
var se = new Element('Se', 'Reactive nonmetals', 'Selenium', 34, 78.197);
var br = new Element('Br', 'Reactive nonmetals', 'Bromine', 35, 79.904);
var i = new Element('I', 'Reactive nonmetals', 'Iodine', 53, 126.90);
var he = new Element('He', 'Noble gases', 'Helium', 2, 4.0026);
var ne = new Element('Ne', 'Noble gases', 'Neon', 10, 10.180);
var ar = new Element('Ar', 'Noble gases', 'Argon', 18, 39.948);
var kr = new Element('Kr', 'Noble gases', 'Krypton', 36, 83.798);
var xe = new Element('Xe', 'Noble gases', 'Xenon', 54, 131.29);
var rn = new Element('Rn', 'Noble gases', 'Radon', 86, '(222)');



function findElement(){
  var elementsList = [h, li, na, k, rb, cs, fr, be, mg, ca, sr, ba, ra, sc, y, ti, zr, hf, rf, v, nb, ta, db, cr, mo, w, sg, mn, tc, re, bh, fe, ru, os, hs, co, rh, ir, ni, pd, pt, cu, ag, au, zn, cd, hg, b, si, ge, as, sb, te, at, al, ga, in_, tl, sn, pb, bi, po, c, n, o, f, p, s, cl, se, br, i, he, ne, ar, kr, xe, rn];
  var search_term = document.getElementById("input_box").value;
  search_term.charAt(0).toUpperCase;

  var result_symbol = document.getElementById('symbol');
  var result_number = document.getElementById('atomic_number');
  var result_mass = document.getElementById('atomic_mass');
  var result_name = document.getElementById('name');
  var result_series = document.getElementById('series');
  var result_energylevel = document.getElementById('el');
  var result_meltingpoint = document.getElementById('melt');
  var result_boilingpoint = document.getElementById('boil');
  var result_en= document.getElementById('en');
  var result_ea = document.getElementById('ea');
  var result_group = document.getElementById('group');
  var result_period = document.getElementById('period');
  var result_about = document.getElementById('about')

  var aresult = [];

  elementsList.forEach(function(element) {
    if (search_term == element.symbol || search_term == element.name || search_term == element.number){

      result_number.textContent = element.number;
      result_mass.textContent = element.mass;
      result_name.textContent = element.name;
      result_symbol.textContent = element.symbol;

      result_series.textContent = "Series: " + element.category;
      result_energylevel.textContent = "Energy levels: " + element.energylevels;
      result_meltingpoint.textContent = "Melting point: " + element.melting;
      result_boilingpoint.textContent = "Boiling point: " + element.boiling;
      result_en.textContent = "Electronegativity: " + element.electronegativity;
      result_ea.textContent = "Electron affinity: " + element.electronaffinity;
      result_group.textContent = "Group: " + element.group;
      result_period.textContent = "Period: " + element.period;
      result_about.textContent = element.about;


      aresult.push(element);
      //
      }else{

    }

  });

}
