var hour = moment().hour();
var workHours = Array(9).fill().map((_, i) => i + 9);
var template = `<section class="row time-block">
  <div class="col col-md-1 hour"></div>
  <textarea class="col col-md-10 description"></textarea>
  <button class="col col-md-1 btn saveBtn"><i class="fas fa-save"></i></button>
</section>`;

$('#currentDay').text(moment().format('LLLL'));
// puts the current time and date under the p under the h1

$.each(workHours, () => $(".container").append(template));
// targets each container and passes a function to append them to the set template variable

$(".time-block").each(function (i) {
    var time = workHours[i] < hour ? 'past' : workHours[i] > hour ? 'future' : 'present';
    $(this).data('hour', workHours[i]).addClass(time);
    $(this).find('.hour').text(moment().hour(workHours[i]).format("h A"));
    $(this).find('.description').val(localStorage.getItem(workHours[i]));
});
// targets each time block and assigns a function that color coordinates them to indicate whether the time in work hours is in the past, present, or future

$(".time-block").on('click', '.saveBtn', function () {
    localStorage.setItem(
        $(this).parent().data('hour'),
        $(this).siblings('.description').val()
    );
});
// allows the button to save the inserted information from the time block into local storage upon a user click