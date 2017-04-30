function display()
{

// takes in data/service
acct_details = '{ "bank_acct": "0000001", "bank_balance": "1000", "datetime": "29042017000000"}'

var goalname = document.getElementById("goalname");
var goaldescr = document.getElementById("goaldescr");
var goalamount = document.getElementById("goalamount").value;

var mydata = JSON.parse(acct_details);
var data_percent = parseInt(mydata.bank_balance)-(goalamount);
//document.write("bank balance: " + data_percent);
var el = document.getElementById('graph'); // get canvas

var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 220,
    lineWidth: el.getAttribute('data-line') || 15,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';


if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;


el.appendChild(span);
el.appendChild(canvas);


ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
}

drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#0c76d3', options.lineWidth, options.percent / 100);
 
};
 
 //acct_detail= "{'bank': {'bank_balance': '2000','datetime_stamp': '29042017000000','0000002': {'bank_balance': '500','datetime_stamp': "29042017000000"}, 	"0000003": {"bank_balance": "500","datetime_stamp": "29042017000000"}}

//acct_detail = "{\"bank\": { \"bank_balance\": \"2000\" ,\"datetime_stamp\": \"29042017000000\",\"0000002\": {\"bank_balance\": \"500\",\"datetime_stamp\": \"29042017000000\"},\"0000003\": {\"bank_balance\": \"500\",\"datetime_stamp\": \"29042017000000\"}}}}";

//var mydata = JSON.parse(acct_detail);
 //alert(mydata.length);
 //document.write("banl balance: " + mydata.bank[0].bank_balance);


 