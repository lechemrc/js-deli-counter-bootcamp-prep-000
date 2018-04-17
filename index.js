var katzDeli = [];

function takeANumber(katzDeli, katzDeliLine){
  katzDeli.push(`${katzDeliLine}`);
  return (`Welcome, ${katzDeliLine}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  let i = katzDeliLine.length;
  if (i > 0){
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else{
    return ("There is nobody waiting to be served!");
  }
}

/*function currentLine(katzDeliLine){
  let i = katzDeliLine.length;
  if (i === katzDeliLine.length){
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i++}. ${katzDeliLine[i+1]}, 3. ${katzDeliLine[2]}`);
  }
  else {
    return ("The line is currently empty."); 
  }
  
}*/

function currentLine(katzDeliLine){
<<<<<<< HEAD
  let i = 0;
  while (i < katzDeliLine.length){
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`);
=======
  let i = katzDeliLine.length;
  while (i > 0){
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i++}. ${katzDeliLine[i+1]}, 3. ${katzDeliLine[2]}`);
>>>>>>> 5ad7e1400c8dd48ffafbb14cff588f81b51070f7
  }
  return ("The line is currently empty.");
}


<<<<<<< HEAD
/*function currentLine(katzDeliLine){
  var lineValues = [];
  if (katzDeliLine.length > 0){  
    for(let i = 0; i < katzDeliLine.length; i++){
      return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, `);
    }
  }
  else {  
    return ("The line is currently empty.");
  }
}*/
=======
function currentLine(katzDeliLine, line) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + katzDeliLine);
}
>>>>>>> 5ad7e1400c8dd48ffafbb14cff588f81b51070f7
