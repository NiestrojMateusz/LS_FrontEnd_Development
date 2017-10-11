
$(window).on('load', function(){

  var preloader = {
    ctx: null,
    createCanvas: function(img) {
      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', img.width);
      canvas.setAttribute('height', img.height);
      $("section:last-child").append(canvas);
      this.ctx = canvas.getContext('2d');
      this.ctx.drawImage(img, 0, 0, img.width, img.height);
      manipulator.convertToGreyscale(img, this.ctx);
    }
  };

  var manipulator = {
    getData: function(img, ctx) {
      return ctx.getImageData(0, 0, img.width, img.height);
    },
    convertToGreyscale: function(img, ctx) {
      var imgData =  this.getData(img, ctx);
      for (var i = 0; i < imgData.data.length; i+=4) {
        var red = imgData.data[i];
        var green = imgData.data[i + 1];
        var blue = imgData.data[i + 2];
        var grey = (red * .3086 + green * .6094 + blue * .0820);
        imgData.data[i] = grey;
        imgData.data[i + 1] = grey;
        imgData.data[i + 2] = grey;
      }
      ctx.putImageData(imgData, 0, 0);
    }
  };

  $("img").each(function(){
    var img = $(this).get(0);
    preloader.createCanvas(img);
  });
});

