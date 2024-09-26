"use client";

import { useId } from "react";

export interface Item {
	value: string;
	label: string;
}

export default function Dropdown(props: {
	items: Item[];
	name: string;
	label: string;
	placeholder: string;
	onChange: (value: string) => undefined;
}) {
	const id = useId();
	return (
		<div className="flex gap-2">
			<label htmlFor={id}>{props.label}</label>
			<select
				className="px-2"
				name={props.name}
				id={id}
				onChange={(v) => props.onChange(v.target.value)}
				defaultValue="placeholder"
			>
				<option value="placeholder" disabled>
					{props.placeholder}
				</option>
				{props.items.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
}
