require("dotenv").config();

const executeCode = async (language, code) => {
	const program = {
		script: code,
		language: language,
		versionIndex: "0",
		clientId: process.env.JDOODLE_CLIENT_ID,
		clientSecret: process.env.JDOODLE_CLIENT_SECRET,
	};

	try {
		const response = await axios.post(
			"https://api.jdoodle.com/v1/execute",
			program,
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

exports.executeCode = executeCode;
