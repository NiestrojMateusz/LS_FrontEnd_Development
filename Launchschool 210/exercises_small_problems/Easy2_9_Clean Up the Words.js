function cleanUp(string) {
  return string.replace(/[^a-z]+/ig, ' ');
}

cleanUp('---what\'s my +*& line?');