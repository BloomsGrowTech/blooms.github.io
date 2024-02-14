Ecwid.OnSetProfile.add(function(customer) {
    console.log(customer.email);
    console.log(customer.billingPerson.countryName);
  });