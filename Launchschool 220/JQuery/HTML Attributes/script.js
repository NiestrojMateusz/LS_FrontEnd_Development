$(function() {
  var $a = $('a[data-block=gold]');

  // console.log($a.attr('data-block')); // gold
  // console.log($a.data('block')); // gold

  // $a.data('block', 'silver');

  // console.log($a.attr('data-block')); // gold
  // console.log($a.data('block')); // silver

  // $('a').on('click', function(e) {
  //   e.preventDefault();

  //   $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  // });

  var gold = document.getElementById('gold');
})
