const $submit = $('button[type=submit]');
const $inputs = $('form input');

$inputs.on('blur', function() {
  let $this = $(this);
  let $errorSpan = $this.siblings('.error_message');
  let label = $this.closest('dd').prev().children().text();

  if ($this.attr('id') === 'phone' && ($this.get(0).validity.patternMismatch || $this.get(0).value === '')) {
    $errorSpan.text(`Please eneter a valid ${label}`);
  } else if (!$this.get(0).validity.valid) {
    $errorSpan.text(`${label} is required field`);
  }

  isInputsValid() ? $('.form_errors').text('') : $('.form_errors').text();
});

$inputs.on('focus', function() {
  let $this = $(this);
  let $errorSpan = $this.siblings('.error_message');
  if ($errorSpan.text() !== '') {
    $errorSpan.text('');
  }
});

$submit.on('click', function(e) {
  e.preventDefault();
  $inputs.trigger('blur');
  console.log(isInputsValid());
  if (!isInputsValid()) {
     $('.form_errors').text('Form cannot be submitted until errors are corrected.');
  }
});


function isInputsValid() {
  let result = $('.error_message').filter(function() {
    return this.innerText !== '';
  });

  return result.length === 0;
}

function isInputsValid() {
  return $('.error_message').is(function() {
    return this.innerText === '';
  });
}