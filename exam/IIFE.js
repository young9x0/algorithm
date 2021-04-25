undefined = true;
(function IIFE(undefined) {
  console.log('true?:', undefined);
  var a;
  if (a === undefined) {
    console.log('what`s happen?');
  }
})((undefined = true));
