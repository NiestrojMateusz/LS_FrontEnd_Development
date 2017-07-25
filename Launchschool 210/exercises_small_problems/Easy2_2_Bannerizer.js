function logInBox(text, maxWidth = 0) {
  var contentWidth = maxWidth > text.length ?  maxWidth : text.length;

  var hBorder = '+' + '-'.repeat(contentWidth + 2) + '+' + "\n";
  var filler = '|' + ' '.repeat(contentWidth + 2) + '|' + "\n";
  var content = genContent(text, contentWidth);

  console.log(hBorder + filler + content + filler + hBorder);

  function genContent(text, width) {
    var re = new RegExp(".{" + String(width) + "}", 'g');
    var lines = text.match(re) || [text];

    return lines.map(function(l) {
      return '|' + ' ' + l + ' ' + '|' + "\n";
    }).join('');
  }
}

logInBox('To boldly go where no one has gone before.');