const Updates = ({ updates }) => (
	<div className="updates">
		<ul>
			{updates?.map((update) => (
				<li>{update}</li>
			))}
		</ul>
	</div>
);
export default Updates;
