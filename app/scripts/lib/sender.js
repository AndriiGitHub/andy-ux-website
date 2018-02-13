(function ($, toastr) {
  var submit = document.getElementById('submit');

  submit.addEventListener('click', function () {
    var form = $('#myForm').serializeArray();

    var formData = {};

    form.forEach(function (field) {
      formData[field.name] = field.value;
    });

    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(!formData.email || !emailPattern.test(formData.email)) {
      toastr.warning('Email is not entered or incorrect');
      return;
    }

    if(!formData.first || !formData.first.length) {
      toastr.warning('First name is not entered or incorrect');
      return;
    }

    $.ajax({
      url: 'https://us-central1-andy-ux-landing.cloudfunctions.net/api/email?' + $.param(formData),
      type: 'GET',
      dataType: 'json'
    });

    $('#myForm')[0].reset();
    toastr.success('Sent');

  });

}(jQuery, toastr));
