$( document ).ready(function() {

    $('#fizzBuzzer').click(function(){

        $('#result').html('');

        var num = $('#number').val();

        for (i = 1; i < num; i++) {
            console.log('one');

            var displayValue = i;

            if((i % 3) == 0) displayValue = 'fizz';
            if((i % 5) == 0) displayValue = 'buzz';
            if(((i % 3) == 0) && ((i % 5) == 0)) displayValue = 'fizzbuzz';

            $('#result').append(displayValue+'<br>');
        }

    });

});