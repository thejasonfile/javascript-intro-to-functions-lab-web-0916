function shout(str){
  return str.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  str = str.toUpperCase()
  return console.log(str)
}

function logWhisper(str){
  str = str.toLowerCase()
  return console.log(str)
}

function sayHiToGrandma(str){
  if (str.toLowerCase() === str){
    return "I can't hear you!"
  } else if (str.toUpperCase() === str){
    return "YES INDEED!"
  } else if (str === "I love you, Grandma."){
    return "I love you, too."
  }
}

