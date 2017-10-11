document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.querySelector('canvas').getContext('2d');
  var canvas = ctx.canvas;
  var canvasStates = [];
  var currentShape;
  var size;

  document.addEventListener('blur', function(e) {
    var element = e.target;

    if (element.tagName === 'INPUT' && element.id === 'size') {
      size = element.value;
    }
  }, true);

  document.querySelector('#color-input').onblur = function(e) {
    ctx.fillStyle = this.value || 'black';
  };

  document.querySelector('#shape-buttons').onclick = function(e) {
    e.preventDefault();
    currentShape = e.target.id;
    renderSizeFormInput();
  };

  document.querySelector('#action-buttons').onclick = function(e) {
    e.preventDefault();
    var buttonID = e.target.id;

    if (buttonID === 'clear') clearCanvas();
    if (buttonID === 'undo') undoCanvas();
  };

  canvas.onclick = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    saveCanvas();

    if (currentShape === 'circle') drawCircle(mouseX, mouseY, size);
    if (currentShape === 'square') drawSquare(mouseX, mouseY, size);
    if (currentShape === 'triangle') drawTriangle(mouseX, mouseY, size);
  };

  function renderSizeFormInput () {
    var URL = 'http://localhost:8765/front-end-development/front_end_development_with_javascript/html5_apis/projects/shape_stamper/size.html'
    var request = new XMLHttpRequest();

    request.open('GET', URL);
    request.addEventListener('load', function(e) {
      document.getElementById('size-select-div').innerHTML = request.response;
      document.getElementById('size').value = size || '';
    });
    request.send();
  }

  function undoCanvas () {
    var canvasState = canvasStates.pop();
    if (canvasState) ctx.putImageData(canvasState, 0, 0);
  }

  function saveCanvas () {
    var canvasState = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvasStates.push(canvasState);
  }

  function drawCircle (x, y, radius = 50) {
    ctx.beginPath();
    ctx.arc(x, y, radius / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawSquare (x, y, size = 50) {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }

  function drawTriangle (x, y, size = 50) {
    size /= 2;
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x - size, y + size);
    ctx.lineTo(x, y - size);
    ctx.fill();
    ctx.closePath();
  }

  function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
