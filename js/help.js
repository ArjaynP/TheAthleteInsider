$("#formValidation").validate({
	rules: {
		fname: {
			required: true,
			minlength: 2
		},
		lname: {
			required: true,
			minlength: 2
		},
		email: {
			required: true,
			email: true
		},
		phone: {
			required: true,
			digits: true,
			minlength: 10,
			maxlength: 10
		},
		subject: {
			required: true,
			minlength: 2
		},
		message: {
			required: true,
			minlength: 5
		}
	},
	messages: {
		fname: {
			required: "Please enter your first name",
			minlength: "First name must be at least 2 characters long"
		},
		lname: {
			required: "Please enter your last name",
			minlength: "Last name must be at least 2 characters long"
		},
		email: {
			required: "Please enter your email",
			email: "Please enter a valid email address"
		},
		phone: {
			required: "Please enter your phone number",
			digits: "Please enter only digits",
			minlength: "Phone number must be exactly 10 digits",
			maxlength: "Phone number must be exactly 10 digits"
		},
		subject: {
			required: "Please enter a subject",
			minlength: "Subject must be at least 2 characters long"
		},
		message: {
			required: "Please enter a message",
			minlength: "Message must be at least 5 characters long"
		}
	},
});