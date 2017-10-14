var Form = {
  toggleForm: function() {
    App.$menu.slideToggle();
    App.$contacts.slideToggle();
    this.$contactForm.slideToggle();
  },
  init: function() {
    this.$contactForm = $("#contact-form");
  }
};
var Contacts = {

};

var contactsData ={
  contacts: [
    {
      "name": "matt",
      "email": "test@test.com",
      "number": "721-676-299"
    },
    {
      "name": "Ju",
      "email": "test@test.com",
      "number": "721-676-299"
    }
  ]
};

var App = {
  $addButton: $(".add-contact"),
  $menu: $(".menu"),
  $contacts: $("#contacts"),
  createTemplates: function() {
    var $contact = $("#contact-template").html();
    var contactTemplate = Handlebars.compile($contact);

    // var contactsSection = contactsTemplate(contactsData);
    // console.log(contactsSection);

    // $("main").append(contactsSection);
  },
  bindEvents: function() {
    this.$addButton.on("click", function(e) {
      Form.toggleForm();
    });
  },
  init: function() {
    this.createTemplates();
    Form.init();
    this.bindEvents();
  }
};

App.init();