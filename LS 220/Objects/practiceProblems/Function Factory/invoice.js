
function createInvoice(services) {
  return {
    phone: services ? services.phone || 3000 : 3000,
    internet: services ? services.internet || 5500 : 5500,
    payments: [],
    total: function() {
      return this.phone + this.internet;
    },
    addPayment: function(payment) {
      this.payments.push(payment);
    },
    addPayments: function(payments) {
      for(var i = 0; i < payments.length; i++) {
        this.addPayment(payments[i]);
      }
    },
    paymentTotal: function() {
      var total = 0;
      for (var i = 0; i < this.payments.length; i++) {
        total += this.payments[i].total();
      }
      return total;
    },
    amountDue: function() {
      return this.total() - this.paymentTotal();
    }
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}
// 4

function createPayment(services) {
  services = services || {};

  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || this.phone + this.internet;
    }
  };
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();


