acct_details = '{ "bank_acct": "0000001", "bank_balance": "1000", "datetime": "29042017000000"}'


var mydata = JSON.parse(acct_details);
 alert(mydata.length);
 document.write("banl balance: " + mydata.bank_balance);
 
 //acct_detail= "{'bank': {'bank_balance': '2000','datetime_stamp': '29042017000000','0000002': {'bank_balance': '500','datetime_stamp': "29042017000000"}, 	"0000003": {"bank_balance": "500","datetime_stamp": "29042017000000"}}

acct_detail = "{\"bank\": { \"bank_balance\": \"2000\" ,\"datetime_stamp\": \"29042017000000\",\"0000002\": {\"bank_balance\": \"500\",\"datetime_stamp\": \"29042017000000\"},\"0000003\": {\"bank_balance\": \"500\",\"datetime_stamp\": \"29042017000000\"}}}}";

var mydata = JSON.parse(acct_detail);
 alert(mydata.length);
 document.write("banl balance: " + mydata.bank[0].bank_balance);
 