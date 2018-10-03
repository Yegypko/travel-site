// var $ = require('jquery');
// var Person = require('./modules/Person');
// import Person from './modules/Person';

// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes $0 in taxes.");
//   }
// }

// alert("ABC 321");

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Adult("Jane Smith", "orange");
// jane.greet();
// jane.payTaxes();

// $("h1").remove();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();