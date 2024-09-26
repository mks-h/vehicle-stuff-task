import { useId } from "react";

export default function Dropdown(props: {
	items: {
		value: string;
		label: string;
	}[];
	name: string;
	label: string;
}) {
	const id = useId();
	return (
		<div className="flex gap-2">
			<label htmlFor={id}>{props.label}</label>
			<select className="px-2" name={props.name} id={id}>
				{props.items.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
}
