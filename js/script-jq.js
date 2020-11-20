$(document).ready(function() {
    

    function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.bonus__main').eq(i).toggleClass('bonus__main_active');
				$('.bonus__descr').eq(i).toggleClass('bonus__descr_active');
			})
		});
	};

	toggleSlide('.bonus__link-more');
	toggleSlide('.bonus__link-back');

    $('input[name=phone]').mask('+380 99 999 99 99');

    $('[data-modal=buy]').on('click', () => {
        $('.overlay, #buy').fadeIn();
    });
    $('.modal__close').on('click', () => {
        $('.modal, .overlay').fadeOut();
    });
    $('button').each((e) => {
        e.preventDefault();
    });
    $('#buy button').on('click', () => {
        $('#buy').fadeOut();
        $('#thanks').fadeIn();
    });
});