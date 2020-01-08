var clipboard = new Clipboard('.btn');

var searchBlock = document.getElementById('output');
$searchBlock = $(searchBlock);

function generateSig(){

	var name = document.getElementById('full-name').value,
	title = document.getElementById('title').value,
	email = document.getElementById('email').value,
	phone = document.getElementById('phone').value,
	city = document.getElementById('city').value,
	team = document.getElementById('team').value;

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
		$searchBlock.find('.employee-office-number').text("+353 1 607 7033");
	} else if (city == "Stamford") {
		$searchBlock.find('.employee-city').text("1 Landmark SQ 22nd Floor Stamford, CT, 06901-2603");
		$searchBlock.find('.employee-office-number').text("+1 203 914 1234");
	}

	if (team == "Group") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Stellwagen Group at +353 (1) 607 7000.<br> Stellwagen Group Limited is a private company limited by shares registered in Malta with Company No. C78497<br>Registered Office:  SmartCity Malta SCM01, Suite 502, Ricasoli, Kalkara, Malta <br>Irish Branch: Embassy House, Ballsbridge, Dublin; Company No. 908616");
	} else if (team == "Capital-US") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Stellwagen Capital at +353 (1) 607 7000.<br> Stellwagen Capital Limited is registered in Bermuda with Company No. 51478<br> Irish Branch: Embassy House, Ballsbridge, Dublin 4, Ireland, Company No. 908451");
	} else if (team == "Capital-UK") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Stellwagen Capital at +353 (1) 607 7000.<br> Stellwagen Capital UK Limited is registered in England with Company No. 11124106<br> Registered Office: 20 North Audley Street, London, United Kingdom, W1K 6WE");
	}	else if (team == "Seraph") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Seraph Aviation Management at +353 (1) 607 7000<br> Seraph Aviation Management Limited is registered in Ireland with Company No. 436832.<br> Registered Office: Riverside One, Sir John Rogerson’s Quay, Dublin 2.<br>Directors:   E. O’Reilly │ D. Brennan (Canadian) │ S. Coyle ");
	} else if (team == "Technology") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Stelltec at +353 (1) 607 7000.<br> Stellwagen Technology Limited is registered in Bermuda with Company No. 51478<br> Irish Branch: Embassy House, Ballsbridge, Dublin 4, Ireland; Company No. 908481 ");
	} else if (team == "Korea") {
		$searchBlock.find('.employee-team').html("This e-mail and any files transmitted with it are CONFIDENTIAL and intended solely for the use of the individual or entity to whom they are addressed.<br> If you have received this e-mail in error please notify the sender. Should you require further assistance please contact:  Stellwagen Korea at +353 (1) 607 7000.<br> Stellwagen Korea Limited is registered in Ireland with Company No. 627177<br> Registered Office: Embassy House, Herbert Park Lane, Ballsbridge, Dublin 4, Ireland<br>Directors:   E. O’Reilly │ Christian Joen (Korean) │ D. Butler<br>");
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
