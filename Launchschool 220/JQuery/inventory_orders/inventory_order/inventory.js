var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      let date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    init: function() {
      this.setDate();
      // ...
    }
  };

})();

$(inventory.init.bind(inventory));