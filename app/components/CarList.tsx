"use client";

import { useEffect, useState } from "react";

export default function CarList(props: { makeId: string; year: string }) {
	const [models, setModels] = useState<
		{
			makerId: number;
			makerName: string;
			modelId: number;
			modelName: string;
		}[]
	>([]);

	const [error, setError] = useState<string>();

	useEffect(() => {
		fetch(
			"https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/" +
				`makeId/${props.makeId}/modelyear/${props.year}?format=json`,
		)
			.then((v) => v.json())
			.then((data) =>
				setModels(
					data.Results.map(
						(v: {
							Make_ID: number;
							Make_Name: string;
							Model_ID: number;
							Model_Name: string;
						}) => ({
							makerId: v.Make_ID,
							makerName: v.Make_Name,
							modelId: v.Model_ID,
							modelName: v.Model_Name,
						}),
					),
				),
			)
			.catch((err) => setError(err.message));
	}, [props.makeId, props.year]);

	return (
		(!!error && (
			<>
				<p className="font-bold">
					Sorry, there was an issue loading models. Please try again later.
				</p>
				<p className="text-red-500">Error: {error}</p>
			</>
		)) || (
			<div className="w-full">
				<ul className="flex flex-wrap gap-4">
					{models.map((v) => (
						<li
							key={v.modelId}
							className="p-2 border-2 bg-slate-50 border-slate-50 shadow-md"
						>
							{`${v.makerName} ${v.modelName}`}
						</li>
					))}
				</ul>
			</div>
		)
	);
}
