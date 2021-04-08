const sampleData = [
	{
		company: "Google",
		open: true,
	},
	{
		company: "HP",
		open: true,
	},
	{
		company: "Amazon",
		open: true,
	},
	{
		company: "Dell",
		open: false,
	},
	{
		company: "Asus",
		open: false,
	},
	{
		company: "Apple",
		open: false,
	},
];

const ApplicationList = (props) => (
	<div>
		<h3>Open Applications</h3>
		{sampleData.map((data, idx) => {
			if (data.open) {
				return (
					<ul>
						<li key={idx}>{data.company}</li>
					</ul>
				);
			}
		})}
		<h3>Closed Applications</h3>
		{sampleData.map((data, idx) => {
			if (!data.open) {
				return (
					<ul>
						<li key={idx}>{data.company}</li>
					</ul>
				);
			}
		})}
	</div>
);

export default ApplicationList;
