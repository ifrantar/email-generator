var clipboard = new Clipboard('.btn');

var searchBlock = document.getElementById('output');
$searchBlock = $(searchBlock);

function generateSig(){

	var name = document.getElementById('full-name').value,
	title = document.getElementById('title').value,
	email = document.getElementById('email').value,
	phone = document.getElementById('phone').value,
	city = document.getElementById('city').value;

	$searchBlock.find('.employee-name').text(name);
	$searchBlock.find('.employee-title').text(title);
	$searchBlock.find('.employee-email').text(email);
	$('#output').find('.employee-email').attr('href','mailto:' + email);
	$searchBlock.find('.employee-number').text(phone);

	if (city == "Dublin") {
		$searchBlock.find('.employee-city').text("Embassy House, Herbert Park Lane, Ballsbridge, D04 H6Y0, Ireland");
		$searchBlock.find('.employee-office-number').text("+353 1 607 7000");
	} else if (city == "London") {
		$searchBlock.find('.employee-city').text("20 North Audley Street London, W1K 6LX");
		$searchBlock.find('.employee-office-number').text("+44 203 397 5932");
	} else if (city == "Korea") {
		$searchBlock.find('.employee-city').text("Three IFC Level 4: 10 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul, Korea 07326");
		$searchBlock.find('.employee-office-number').text("Korea's phone number");
	} else if (city == "Stamford") {
		$searchBlock.find('.employee-city').text("1 Landmark SQ 22nd Floor Stamford, CT, 06901-2603");
		$searchBlock.find('.employee-office-number').text("+1 203 914 1234");
	}


	$('button').show();
	$('#js-copy').val('Copy');
}
clipboard.on('success', function(e) {
	$('#js-copy').val('✓ Copied!');
});

clipboard.on('error', function(e) {
	console.log(e);
});
