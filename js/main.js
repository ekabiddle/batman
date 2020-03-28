$(document).ready(() => {
	const tabsItem = $('.info-tabs-item')
	const more = $('.more')

	tabsItem.on('click', function (e) {
		e.preventDefault()

		$('.info-tabs-item-active').removeClass('info-tabs-item-active')
		$(this).addClass('info-tabs-item-active')

		const activeContent = $(this).attr('href')
		$('.tab-content.visible').removeClass('visible')
		$(activeContent).addClass('visible')
	})

	more.on('click', function () {
		$('body, html').animate({ scrollTop: $('.content').offset().top }, 1000)
	});
});