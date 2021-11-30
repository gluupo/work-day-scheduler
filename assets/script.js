var hour = moment().hour();
var range = Array(9).fill().map((_, i) => i + 9);
var template = `<section class="row time-block">
  <div class="col col-md-1 hourr"></div>
  <textarea class="col col-md-10 description"></textarea>
  <button class="col col-md-1 btn saveBtn"><i clasls="fas fa-save"></i></button>
</section>`;

$('#currentDay').text(moment().format('LLLL'));

$.each(range, () => $(".container").append(template));

$(".time-block").each(function (i) {
    var time = range[i] < hour ? 'past' : range[i] > hour ? 'future' : 'present';
    $(this).data('hour', range[i]).addClass(time);
    $(this).find('.hour').text(moment().hour(range[i]).format("h A"));
    $(this).find('.description').val(localStorage.getItem(range[i]));
});

$(".time-block").on('click', '.saveBtn', function () {
    localStorage.setItem(
        $(this).parent().data('hour'),
        $(this).siblings('.description').val()
    );
});