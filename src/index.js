module.exports = function check(str, bracketsConfig) {
  //Make an array of config chars concatenated into pairs.
  //it will made next steps easier
  let config = [];
  
  bracketsConfig.forEach(element => {
    config.push(element.join(''))
  });

  //Define function that replaces config brackets if it find ones with emptiness 
  function findBrackets(str) {
    //Save input string length. Once the function finish the job 
    //it will compare output length with input.
    let lengthBefore = str.length;

    config.forEach(element => {
      str = str.replace(element, '');
    });
    //Same length mean no changes are made so return string as is...
    if(str.length === lengthBefore) {
      return str;
      //...or if chages are made we need to start the process over again
      //by recursively calling findBrackets function
    } else return findBrackets(str);
  }
  //Return true if output string is empty or false if it is not
  return findBrackets(str).length === 0;
}
