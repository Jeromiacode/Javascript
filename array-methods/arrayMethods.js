function atMethod() {
  function at(n) {
    n = Math.trunc(n) || 0;
    if (n < 0) n += this.length;
    if (n < 0 || n >= this.length) return undefined;
    return this[n];
  }
  const TypedArray = Reflect.getPrototypeOf(Int8Array);
  for (const C of [Array, String, TypedArray]) {
    Object.defineProperty(C.prototype, "at", {
      value: at,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
atMethod();
// ↑ To use .at() ↑ //
/*****************************************************************************************/
/************************** BASE *********************************************************/
const tab = [0.1, 42, "Jérôme", true];
console.log("[tab]------------>", tab, "<----------<");
/************************** ARRAY.ISARRAY(val/tableau) ***********************************/
console.log("[boolean]    Array.isArray(tab)                           >", Array.isArray(tab));
// output: true
/************************** ARRAY.OF(val) ************************************************/
console.log("[newTab]     Array.of(4, 3, 2)                            >", Array.of(4, 3, 2));
// output: [ 4, 3, 2 ]
/************************** ARRAY.FROM(val/tableau,{function}) **************************/
console.log("[newTab]     Array.from(tab, e => e + 1))                 >", Array.from(tab, e => e + 1));
// output: [ 1.1, 43, 'Jérôme1', 2 ]
/************************** .LENGTH ****************************************************/
console.log("[entier]          .length                                 >", tab.length); 
// output: 4
/************************** .AT(entier) ************************************************/
console.log("[value]           .at()                                   >", tab.at(2)); 
// output: Jérôme
/************************** .CONCAT(tableau) *******************************************/
console.log("[newTab]          .concat('Mia')                          >", tab.concat("Mia")); 
// output: [0.1, 42, "Jérôme", true, "Mia"]
/************************** .COPYWITHIN(cible, début, {fin}) **************************/
console.log("[thisTab]         .copyWithin(0, 1, 2)<------------------->", tab.copyWithin(0, 1, 2)); 
// output: [ 42, 42, 'Jérôme', true ]
/************************** .ENTRIES() ************************************************/
const tabEntries = tab.entries()
console.log("[newTab]          .entries().next().value                 >", tabEntries.next().value); 
// output: [ 0, 42 ]
/************************** .EVERY(function) ******************************************/
console.log("[boolean]         .every(e => e === 42)                   >", tab.every(e => e === 42)); 
// output: false
/************************** .FILL(val,CibleDébut,{cibleFin}) **************************/
console.log("[thisTab]         .fill(0, 1)<---------------------------->", tab.fill(0, 1)); 
// output: [ 42, 0, 0, 0 ]
/************************** .FILTER(function) *****************************************/
console.log("[newTab]          .filter(e => e === 0)                   >", tab.filter(e => e === 0)); 
// output: [ 0, 0, 0 ]
/************************** .FIND(function) ********************************************/
console.log("[value]           .find(e => e > 1)                       >", tab.find(e => e > 1)); 
// output: 42
/************************** .FINDINDEX(function) ***************************************/
console.log("[entier]          .findIndex(e => e === 0)                >", tab.findIndex(e => e === 0)); 
// output: 1
/************************** .FLAT(entier) **********************************************/
const tabFlat = [1, ,tab]
console.log("[tabFlat]-------->", tabFlat, "<");
console.log("[newTab]          .flat()                                 >", tabFlat.flat());
// output: [ 1, 42, 0, 0, 0 ]
/************************** .FLATMAP(function) *****************************************/
console.log("[newTab]          .flatMap(e => e + 1)                    >", tab.flatMap(e => e + 1)); 
// output: [ 43, 1, 1, 1 ]
/************************** .FOREACH(function) *****************************************/
console.log("[undefined]       .forEach((e, i) => i, e)                >"); 
tab.forEach((e, i) => console.log("                                                          >", i, e));
// output: 0 42 1 0 2 0 3 0
/************************** .INCLUDES(val) *********************************************/
console.log("[boolean]         .includes(1))                           >", tab.includes(1));
// output: false
/************************** .INDEXOF(val) *********************************************/
console.log("[value]           .indexOf(0))                            >", tab.indexOf(0));
// output: 1
/************************** .JOIN(val) ***********************************************/
console.log("[newStr]          .join()                                 >", tab.join());
// output: 42,0,0,0
/************************** .KEYS(val) ***********************************************/
const tabKeys = tab.keys();
console.log("[newObj]          .keys()                                 >");
for (const key of tabKeys) {
    console.log("                                                          >", key);
}
// output: 0 1 2 3
/************************** .LASTINDEXOF(val) ****************************************/
console.log("[value]           .lastIndexOf(0)                         >", tab.lastIndexOf(0));
// output: [ '42e', '0e', '0e', '0e' ]
/************************** .MAP(function) ********************************************/
console.log("[newTab]          .map(e => e + 'e')                      >", tab.map(e => e + "e"));
// output: [ '42e', '0e', '0e', '0e' ]
/************************** .POP() ***************************************************/
console.log("[newTab]          .pop()                                  >", tab.pop());
// output: 0 42 1 0 2 0 3 0
console.log("[tab]------------>", tab, "<-------------------------<");
/************************** .PUSH(val) ***********************************************/
console.log("[tabSize]         .push(true)                             >", tab.push(true));
// output: 0 42 1 0 2 0 3 0
console.log("[tab]------------>", tab, "<-------------------<");
/************************** .REDUCE(function) ****************************************/
console.log("[value]           .reduce((acc, val) => acc + val))       >", tab.reduce((acc, val) => acc + val));
// output: 0 42 1 0 2 0 3 0
/************************** .REDUCERIGHT(function) ************************************/
console.log("[value]           .reduceRight((acc, val) => acc + val))  >", tab.reduceRight((acc, val) => acc + val));
// output: 0 42 1 0 2 0 3 0
// ↑ voir : https://code.tutsplus.com/articles/5-real-life-uses-for-the-javascript-reduce-method--cms-39096
/************************** .REVERSE(tab) **************************/
console.log("[thisTab]         .reverse()                              >", tab.reverse());
// output: [ true, 0, 0, 42 ]
/************************** .SHIFT() **************************************************/
console.log("[element]         .shift()                                >", tab.shift());
// output: true
/************************** .SLICE(indexStart,{indexEnd}) ******************************/
console.log("[element]         .slice(1)                               >", tab.slice(1));
// output: [0, 42]
console.log("[tab]------------>", tab, "<-------------------------<");
/************************** .SOME(function) **********************************************/
console.log("[boolean]         .some(e => e == 1))                     >", tab.some(e => e == 1));
// output: false
/************************** .SORT({function}) ********************************************/
console.log("[thisTab]         .sort((a,b) => b - a))------------------>", tab.sort((a,b) => b - a));
// output: false
/************************** .SORT(index,nbElem,val) ****************************************/
console.log("[value]           .splice(0, 1, 64))---------------------->", tab.splice(1, 1, 64));
// output: [0]
console.log("[tab]------------>", tab, "<------------------------<");
/************************** .TOLOCALESTRING({locales, options}) ****************************************/
console.log("[value]           .splice(0, 1, 64))---------------------->", tab.splice(1, 1, 64));
// output: [0]