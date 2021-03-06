$(function(){
  var photos,
      templates = {},
      comments;

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html())
  });

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  var slideshow = {
    $el: $("#slideshow"),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current  = this.$el.find("figure:visible"),
          $prev = $current.prev("figure");

      if (!$prev.length) {
        $prev = this.$el.find("figure").last();
      }

      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr("data-id"));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current  = this.$el.find("figure:visible"),
          $next = $current.next("figure");

      if (!$next.length) {
        $next = this.$el.find("figure").first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr("data-id"));
    },
    renderPhotoContent: function(idx) {
      $("[name=photo_id]").val(idx);
      renderPhotoInformation(+idx);
      getCommentsFor(+idx);
    },
    bind: function() {
      this.$el.find("a.prev").on("click", $.proxy(this.prevSlide, this));
      this.$el.find("a.next").on("click", $.proxy(this.nextSlide, this));
    },
    init: function() {
      this.bind();
    }
  };
  $.ajax({
    url: "/photos",
    success: (json) => {
      photos = json;
      renderPhoto();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      getCommentsFor(photos[0].id);
    }
  });

  $("section > header").on("click", ".actions a", function(e){
    e.preventDefault();
    $e = $(this);

    $.ajax({
      url: $e.attr("href"),
      type: "post",
      data: "photo_id=" + $e.attr("data-id"),
      success: (json) => {
        $e.text(function(i, txt){
          return txt.replace(/\d+/, json.total);
        });
      }
    });
  });

  $( "form" ).on( "submit", function( e ) {
    e.preventDefault();
    $e = $(this);

    var data = ($e.serialize()),
        url = $e.attr("action");
        type = $e.attr("method");
    $.ajax({
      url: url,
      type: type,
      data: data,
      success: (json) => {
        $("#comments ul").append(templates.comment(json));
        $e.get(0).reset();
      }
    });
  });

  function renderPhoto() {
    $("#slides").html(templates.photos({photos: photos}));
  }

  function renderPhotoInformation(idx) {
    var photo = photos.filter(function(item){
      return item.id === idx;
    })[0];
    $("section > header").html(templates.photo_information(photo));
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + idx,
      success: (json) => {
        comment_json = json;
        renderComments(comment_json);
      }
    });
  }

  function renderComments(comment) {
    $("#comments ul").html(templates.comments({comments: comment}));
  }


});

// Attach events to the previous and next anchors to fade out the current photo and fade in the new one at the same time