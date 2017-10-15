var Contact = {
  init: function(name, email, number, tags) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.tags = tags;
    this.index = App.getContactList().length;
    return this;
  }
};

var Form = {
  toggleForm: function() {
    App.$menu.slideToggle();
    App.$contacts.slideToggle();
    this.$contactForm.slideToggle();
  },
  resetForm: function() {
    $('form').find("input").val('');
  },
  getFormData: function() {
    let $inputs = $("#contact-form input");
    return {
      name: $inputs[0].value,
      email: $inputs[1].value,
      phoneNumber: $inputs[2].value,
      tags: $inputs[3].value.toLowerCase().split(" "),
    };
  },
  handleCancelButton: function() {
    let self = this;
    this.$cancel.on("click", function(e){
      e.preventDefault();
      self.toggleForm();
    });
  },
  handleSubmitButton: function() {
    this.$submit.on("click", function(e) {
      e.preventDefault();
      let data = this.getFormData();

      App.createContact(data);
      this.toggleForm();
      this.resetForm();
      App.renderContacts();
    }.bind(this));
  },
  bindFormEvents: function() {
    this.handleCancelButton();
    this.handleSubmitButton();
  },
  init: function() {
    this.$contactForm = $("#contact-form");
    this.$cancel = $(".cancel");
    this.$submit = $(".submit-contact");
    this.bindFormEvents();
  }
};

var App = {
  $addButton: $(".add-contact"),
  $menu: $(".menu"),
  $contacts: $("#contacts"),
  createContact: function(data) {
    let contact = Object.create(Contact).init(data.name, data.email, data.phoneNumber, data.tags);
    this.list.push(contact);
    this.saveContactsList();
  },
  deleteContact: function(element,index) {
    element.fadeOut(400, function() {
      $(this).remove();
    });

    this.list.splice(index, 1);
    this.saveContactsList();
  },
  renderContacts: function() {
    let contactsData = {
      contacts: this.getContactList()
    };
    if (contactsData.contacts.length !== 0) {
      $("#empty-contacts").slideUp();
      $(".contact").remove();
      let contactSection = this.contactTemplate(contactsData);
      $("#contacts").append(contactSection);
    }
  },
  saveContactsList: function() {
    localStorage.setItem('list', JSON.stringify(this.list));
  },
  getContactList: function() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    return this.list;
  },
  createTemplates: function() {
    var $contact = $("#contact-template").html();
    this.contactTemplate = Handlebars.compile($contact);
  },
  getCurrentContact: function(e) {
    this.list.find(function(contact) {
      return contact.index === currentID;
    }.bind(this));
  },
  handleDeleteButton: function(e) {
    let answer = confirm("Are you sure you want to delete this contact?");
    if (answer) {
      this.deleteContact(this.currentContactDiv, this.currentContactIndex);
      if (this.list.length === 0) {
        $("#empty-contacts").slideDown();
      }
    }
  },
  handleEditButton: function(e) {

  },
  handleContactButtons: function() {
    let self = this;
    $("#contacts").on('click', ".contact", function(e) {
      this.currentContactDiv = $(e.target).closest(".contact");
      this.currentDivId = this.currentContactDiv.data('id');
      this.currentContact = this.list.find(function(contact) {
        return contact.index === self.currentDivId;
      });
      this.currentContactIndex = this.list.indexOf(this.currentContact);

      switch (e.target.innerText.toLowerCase()) {
        case 'delete':
          this.handleDeleteButton(e);
          break;
        case 'edit':
          this.handleEditButton(e);
          break;
      }
    }.bind(this));
  },
  bindEvents: function() {
    this.$addButton.on("click", function(e) {
      Form.toggleForm();
    });
    this.handleContactButtons();
  },
  init: function() {
    this.createTemplates();
    this.getContactList();
    this.renderContacts();
    Form.init();
    this.bindEvents();
  }
};

App.init();

