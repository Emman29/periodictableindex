//create object template
function Element(symbol, category, name, number, mass,) {
  this.symbol = symbol;
  this.category = category;
  this.name = name;
  this.number = number;
  this.mass = mass;
}
//Store
var h = new Element('H', 'Reactive nonmetal', 'Hydrogen', 1, 1.008);
var li = new Element('Li', 'Alkali metals', 'Lithium', 3, 6.94);
var na = new Element('Na', 'Alkali metals', 'Sodium', 11, 22.990);
var k = new Element('K', 'Alkali metals', 'Potassium', 19, 39.098);
var rb = new Element('Rb', 'Alkali metals', 'Rubidium', 37, 85.468);
var cs = new Element('Cs', 'Alkali metals', 'Caesium', 55, 132.91);
var fr = new Element('Fr', 'Alkali metals', 'Francium', 87, '(223)');
var be = new Element('Be', 'Alkaline earth metals', 'Beryllium', 4, 9.0122);
var mg = new Element('Mg', 'Alkaline earth metals', 'Magnesium', 12, 24.305);
var ca = new Element('Ca', 'Alkaline earth metals', 'Calcium', 20, 40.078);
var sr = new Element('Sr', 'Alkaline earth metals', 'Strontium', 38, 87.62);
var ba = new Element('Ba', 'Alkaline earth metals', 'Barium', 56, 137.33);
var ra = new Element('Ra', 'Alkaline earth metals', 'Radium', 88, '(226)');
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
var rn = new Element('Ar', 'Noble gases', 'Radon', 86, '(222)');


function findElement(){
  var elementsList = [h, li, na, k, rb, cs, fr, be, mg, ca, sr, ba, ra, sc, y, ti, zr, hf, rf, v, nb, ta, db, cr, mo, w, sg, mn, tc, re, bh, fe, ru, os, hs, co, rh, ir, ni, pd, pt, cu, ag, au, zn, cd, hg, b, si, ge, as, sb, te, at, al, ga, in_, tl, sn, pb, bi, po, c, n, o, f, p, s, cl, se, br, i, he, ne, ar, kr, xe, rn];
  var search_term = document.getElementById("input_box").value;
  search_term.charAt(0).toUpperCase;

  var result_symbol = document.getElementById('symbol');
  var result_number = document.getElementById('atomic_number');
  var result_mass = document.getElementById('atomic_mass');
  var result_name = document.getElementById('name');

  elementsList.forEach(function(element) {
    if (search_term == element.symbol || search_term == element.name || search_term == element.number || search_term == element.category){

      result_number.textContent = element.number;
      result_mass.textContent = element.mass;
      result_name.textContent = element.name;
      result_symbol.textContent = element.symbol;
      box_item.className = 'element_box';
    }else{
      alert('Huh, that didn\'nt work.');
    }
  });

}
