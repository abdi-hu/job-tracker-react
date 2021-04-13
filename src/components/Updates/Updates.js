const Updates = ({ updates }) => (
	<div className="updates">
		<ul>
			{updates?.map((update, idx) => (
				<li key={idx}>{update}</li>
			))}
		</ul>
	</div>
);
export default Updates;
