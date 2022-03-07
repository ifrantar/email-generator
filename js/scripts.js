var clipboard = new Clipboard('.btn');

var searchBlock = document.getElementById('output');
$searchBlock = $(searchBlock);

function generateSig(){

	var name = document.getElementById('full-name').value,
	title = document.getElementById('title').value,
	email = document.getElementById('email').value,
	phone = document.getElementById('phone').value;
	//city = document.getElementById('city').value,
	//team = document.getElementById('team').value;

	$searchBlock.find('.employee-name').text(name);
	$searchBlock.find('.employee-title').text(title);
	$searchBlock.find('.employee-email').text(email);
	$('#output').find('.employee-email').attr('href','mailto:' + email);
	$searchBlock.find('.employee-number').text(phone);


	$('button').show();
	$('#js-copy').val('Copy');
}
clipboard.on('success', function(e) {
	$('#js-copy').val('✓ Copied!');
});

clipboard.on('error', function(e) {
	console.log(e);
});
