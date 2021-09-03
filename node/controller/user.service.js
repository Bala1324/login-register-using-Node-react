const moment = require("moment");
const database = require('../helper/db.js');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const user = database.users;
const bcrypt = require("bcrypt");
const mailTransport = nodemailer.createTransport({
	"service" : "gmail",
	"auth": {
		user : "balachandiran132@gmail.com",
		pass: "1324bala1324"
	}
});

module.exports = {
	 registerUser,
      loginUser,
     
}

// register user
async function registerUser(req,res) {
	console.log(req.body);
	let email = req.body.email;
	let details = {
		from: "balachandiran132@gmail.com",
		to: email,
		subject: "Wellcome to Food Park",
		text: "You have successfullly registered...."
	}
	let name = req.body.name;
	let password1 = req.body.password;
	const email_detail = await user.find({"email": email}).exec();
	if(email_detail.length>0){
		throw res.json({"status": "Failed", "message": "email already exists"});
	}
	const mobile_Availab = await user.find({"name": name}).exec()
	if(mobile_Availab.length>0){
		throw res.json({"status": "Failed", "message": "name already exists"});
	}
	let users = new user(req.body);
	if(password1){
		let password = req.body.password;
		let salt = await bcrypt.genSalt(10);
		users.password = bcrypt.hashSync(password, salt);
		users.save();
		console.log(users);
		sendMail(details);
		res.json({"status": "Success", "message": "Register successfully"});
	}else{
		res.json({"status": "Failed", "message": "Please Provide password"});
	}
};


//Login user
async function loginUser(req,res) {
	console.log(req.body)
	let email = req.body.email;
	let password = req.body.password;
	let users = await user.findOne({"email": email}).exec();
	if(users){

		console.log(users);
	let pass = users.password;
	console.log(pass);
	let match = await bcrypt.compare(password, pass);

	if(match){
		res.json({"status": "Success", "message": "Login successfully","user": users});
	}else{
		res.json({"status": "Failed", "message": "Username or password wrong"});
	}
	}else{

		res.json({"status": "Failed", "message": "User not Registered"});
	}
	
}

	function sendMail(details){
		
		let mailData;
		mailData = {
			from: details.from,
			to: details.to,
			subject: details.subject,
			text: details.text
		}
		mailTransport.sendMail(mailData, function(err,data){
			if(err){
				console.log(err)
			}else{
				console.log("Email sent");
			}
		})
	}