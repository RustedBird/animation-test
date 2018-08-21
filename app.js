;(function ($) {
    var $pathArray = $('path');

    var a = 1;
    
    function printChar() {
        if (a <= $pathArray.length) {
            setTimeout(function () {
                $('path:nth-of-type(' + a + ')').addClass('pen');
                a++;
                printChar();
            }, 500)
        }
    }

    $(document).on('click', 'button', function () {
        console.log('click');
        $('path').removeClass('pen');
        a = 1;
        printChar();
    })
}(jQuery));