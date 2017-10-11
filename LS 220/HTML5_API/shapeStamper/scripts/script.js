$(function() {
  var shape;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';

  $("ul").on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(this);
    $e.closest('ul').find('.active').removeClass("active");
    $e.addClass("active");
    if ($e.attr('id') === 'clear') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      $e.removeClass();
    }

    shape = $e.text();

  });

  $("form input").on("blur", function() {
    getCanvasColor($(this.target).val());
  });

  $('canvas').on('click', function(e) {
    e.preventDefault();
    var $e = $(this),
        x = e.offsetX,
        y = e.offsetY,
        $input = $("form input");


    switch (shape) {
      case "Circle":
        drawCircle(x,y);
        break;

      case "Triangle":
        drawTriangle(x,y);
        break;
      case "Square":
        drawSquare(x,y);
        break;

    }

  });

  function getCanvasColor(color) {
    if (color === "") {
      return;
    } else {
      ctx.fillStyle = $("form input").val().toLowerCase();
    }
  }

  function drawCircle(x,y) {
    var radius = 15;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawTriangle(x,y) {
    ctx.beginPath();
    ctx.moveTo(x, y - 30);
    ctx.lineTo(x + 15, y);
    ctx.lineTo(x - 15, y);
    ctx.lineTo(x, y - 30);
    ctx.fill();
    ctx.closePath();
  }

  function drawSquare(x,y) {
    ctx.fillRect(x,y, 30, 30);
  }

});

