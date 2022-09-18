const rules = {
	require({ label }) {
		return v => !!v || `[${label}] Required fields`;
	},
	min({ label, len = 3 }) {
		return v => !!v ? v.length >= len || `[${label}] Please enter at least ${len} characters` : true;
	},
	alphaNum() {
		return v => !!v ? /^[a-zA-Z0-9_]+$/.test(v) || `Alphanumeric only enter` : true;
	},
	pattern({ label, pattern }) {
		return v => !!v ? pattern.test(v) || `[${label}] Please enter according to the format` : true;
	},
	matchValue(origin) {
		return v => origin === v || 'Password does not match';
	},
	id(options) {
		const defaultOptions = {
			label: 'ID',
			len: 3,
			required: true,
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if (opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.min(opt));
		arr.push(rules.alphaNum());
		return arr;
	},
	name(options) {
		const defaultOptions = {
			label: 'Name',
			len: 2,
			required: true,
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if (opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.min(opt));
		return arr;
	},
	email(options) {
		const defaultOptions = {
			label: 'email',
			required: true,
			pattern: /.+@.+\..+/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if (opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.pattern(opt));
		return arr;
	},
	password(options) {
		const defaultOptions = {
			label: 'Password',
			required: true,
			len: 6,
			pattern: /^.*(?=^.{6,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if (opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.min(opt));
		arr.push(rules.pattern(opt));
		return arr;
	},
	date(options) {
		const defaultOptions = {
			label: 'Date',
			required: true,
			pattern: /^\d{4}-\d{2}-\d{2}$/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if (opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.pattern(opt));
		return arr;
	},
	phone(options) {
		const defaultOptions = {
			label : 'Phone number',
			required : true,
			pattern : /^(\d{2,3}-)?\d{3,4}-\d{4}$/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if(opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.pattern(opt));
		return arr;
	},
};

module.exports = rules;