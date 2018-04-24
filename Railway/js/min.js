function validate(funObj) { //funObj is object of form
			var username , password;
			username = funObj.uname.value;
			password = funObj.upass.value;
			if (username.length==0) {
				alert("Please Enter the username first");
				funObj.uname.focus();
				return false;
			}
            else if (password.length==0) {
				alert("Please Enter the password first");
				funObj.upass.focus();
				return false;
            }
			else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)) {
				alert("Please enter a valid password conains upper case, lower case and number");
				funObj.upass.focus();
				return false;
			}
			else {
				alert("Sign in Successfully");
				return true;
			}
		}

function signupValidate(obj){
	var first_name , last_name, e_mail,re_mail, p_ass,r_pass;
	first_name = obj.fname.value;
	last_name = obj.lname.value;
	e_mail = obj.email.value;
	re_mail = obj.remail.value;
	p_ass = obj.pass.value;
	r_pass = obj.rpass.value;
	if (first_name.length==0) {
				alert("kindly Enter the First name");
				obj.fname.focus();
				return false;
			}
	else if (last_name.length==0) {
				alert("Kindly Enter the Last name ");
				obj.lname.focus();
				return false;
			}	
	else if (!e_mail.match(/^(?=.*[@.]).*$/)) {
				alert("Please Enter the valid Email");
				obj.email.focus();
				return false;
			}
	else if (re_mail.length==0) {
				alert("Email does not match");
				obj.remail.focus();
				return false;
			}
	else if (e_mail!=re_mail) {
		alert("Email not match");
		obj.re_mail.focus();
		return false;
	}
	else if (p_ass.length==0) {
		alert("Please Enter a valid password");
		obj.pass.focus();
		return false;
	}
    else if (r_pass.length==0) {
    	alert("password does not match");
    	obj.rpass.focus();
    	return false;
    }
     else if (p_ass!=r_pass) {
    	alert("password does not match");
    	obj.rpass.focus();
    	return false;
    }
    else 
    {
    	alert("Account Created Successfully");
    }

}		