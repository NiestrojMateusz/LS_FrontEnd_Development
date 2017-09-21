function diamond(num) {
  if (num === 1) return '*';
  var halfNumber = Math.floor(num / 2);
  var j = 1;
  var diamondTip = ' '.repeat(halfNumber) + '*' + '\n';
  var diamond = diamondTip;

  for (var i = halfNumber - 1; i >= 0; i--) {
    diamond += ' '.repeat(i) + '*' + ' '.repeat(j) + '*' + '\n';
    j += 2;
  }

  for (var i = 1; i <= halfNumber - 1; i++) {
    diamond += ' '.repeat(i) + '*' + ' '.repeat(j - 4) + '*' + '\n';
    j -= 2;
  }

  return diamond + diamondTip;
}

diamond(5);