let personName: string="Haider"
console.log ("lower case:",personName.toLowerCase());

// upper case
console.log("uppercase:",personName.toUpperCase());

// Title case
console.log("titlecase:",personName.replace(/\bw/g,c=>c.toUpperCase()));
