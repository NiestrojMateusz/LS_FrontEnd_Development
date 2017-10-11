$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var name = $('form').find('#name').val();
    var quantity =  $('form').find('#quantity').val() || 1;

    $('ul').append('<li>'+ quantity + ' ' + name + '</li>');

    $('form').get(0).reset()
  });

});