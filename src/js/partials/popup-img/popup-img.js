//popup magnatic
$(".category__content .category__item").magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}
});


$('.blog__link').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});


$('.about-modal').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#username',
	modal: true
});
$(document).on('click', '.popup-modal-dismiss', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});
