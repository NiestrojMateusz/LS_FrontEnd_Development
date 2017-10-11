$(function() {
  var $nav = $("nav");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $e = $(this),
        className = "active";
        idx = $e.closest('li').index();

    // set active class to clicked element
    $e.closest("nav").find("." + className).removeClass(className);
    $e.addClass(className);
    $("#tabs article").hide().eq(idx).show();
    localStorage.setItem('active_nav', idx);
  });

  $(":radio").on("change", function() {
    var color = $(this).val();

    $(document.body).css({ background: color});
    localStorage.setItem("background", color);
  });

  $(window).on("unload", function() {
    localStorage.setItem("note", $("textarea").val());
  });
  setActiveNav(localStorage.getItem("active_nav"));
  setBackground(localStorage.getItem("background"));
  setNote(localStorage.getItem("note"));
});

function setActiveNav(idx) {
  if (idx === null) { return; }
  $("nav a").eq(idx).click();
}

function setBackground(color) {
  if (color === null) { return; }
  $("[value='" + color + "']").prop("checked", true).change();
}

function setNote(comment) {
  $('textarea').val(comment);
}