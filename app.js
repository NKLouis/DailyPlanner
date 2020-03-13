//Global variable
var now = moment()

//set up timeblocks for standard business hours
$(document).ready(function () {

    hourArr = $('.hour').toArray()
    for (i = 0; i < hourArr.length; i++) {

     $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')))
    }
});
    for (i = 0; i < 9; i++) {

    
    var rowBlocks = $('<div>').addClass('row');
    
    $('.container').append(rowBlocks);


    var timeBlocks = $('<div>').addClass('hour').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA')).css('width', '10%');

    timeBlocks.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));

    $(rowBlocks).append(timeBlocks);

    var textBlocks = $('<textarea>').css('width', '85%');

    
 // Color coded each block based on the current time
    
    if (now.isSame(moment('9:00 am', 'hh:mm A').add(i, 'hours'),)) {

        $(textBlocks).addClass('present');
    }
     else if (now.isBefore(moment('9:00 am', 'hh:mm A').add(i, 'hours'),)) {

        $(textBlocks).addClass('future');
    } 
     else if (now.isAfter(moment('9:00 am', 'hh:mm A').add(i, 'hours'),)) {
         
        $(textBlocks).addClass('past');
    }

    // added a save icon to saveButton
    var saveButton = $('<button>').addClass('saveBtn').html('<i class="fas fa-save"></i>');

    $(timeBlocks).after(textBlocks);

    $(textBlocks).after(saveButton);


}

// Clicking a save icon will save the lastest content to localStorage.

 $('.saveBtn').on('click', function () {

    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
});