var inventory;

(function() {
  inventory = {
    last_id: 0,
    collection: [],
    setDate: function() {
      let date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $("#inventory_item").remove();
      this.template = $i_tmpl.html();
    },
    add: function(){
      this.last_id++;
      var item = {
        id: this.last_id,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));
      console.log($item.html());
    },
    bindEvents: function() {
      $("#add_item").on("click", $.proxy(this.newItem, this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };

})();

$(inventory.init.bind(inventory));