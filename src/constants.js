const RULES = [
	{
		name: "javascript",
		language: "js",
		questions: [
			{
				code: 'cosole.log("hello world")',
				errors: 1,
			},
			{
				code: "cosnole.log(hello world)",
				errors: 2,
			},
		],
	},
	{
		name: "typescript",
		language: "ts",
		questions: [
			{
				code: `function sayWord(value: string) {\n\tconsole.log(value);\n}\nsayWord(2);`,
				errors: 1,
			},
		],
	},
	{
		name: "python",
		language: "python",
		questions: [
			{
				code: "print(hello world)",
				errors: 2,
			},
			{
				code: 'print "hello world"',
				errors: 3,
			},
			{
				code: "print(hello, world)",
				errors: 4,
			},
		],
	},
	{
		name: "cpp",
		language: "cpp",
		questions: [
			{
				code: '#include <iostream>\nint main() {\n    cout << "hello world" << std::endl;\n    return 0;\n}',
				errors: 2,
			},
			{
				code: "#include <iostream>\nint main() {\n    std::cout << hello world << std::endl;\n    return 0;\n}",
				errors: 3,
			},
			{
				code: '#include <iostream>\nint main() {\n    std::cout << "hello world" << std::endl\n    return 0;\n}',
				errors: 4,
			},
		],
	},
	{
		name: "c#",
		language: "cs",
		questions: [
			{
				code: "using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine(hello world);\n    }\n}",
				errors: 2,
			},
			{
				code: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("hello world")\n    }\n}',
				errors: 3,
			},
			{
				code: 'using System;\nclass Program {\n    static void main() {\n        Console.WriteLine("hello world");\n    }\n}',
				errors: 4,
			},
		],
	},
	{
		name: "react",
		question:
			"السؤال ان فيه حاجة في code الreact ده ممكن تسبب مشاكل لما تشغلو",
		language: "jsx",
		questions: [
			{
				code: "function App() {\n\tconst users = [1, 2, 1, 4, 5];\n\treturn (\n\t\t<>\n\t\t\t{users.map(user => (\n\t\t\t\t<div key={user}>{user}</div>\n\t\t\t))}\n\t\t</>\n\t);\n}",
				errors: 1,
			},
		],
	},
];

exports.RULES = RULES;
