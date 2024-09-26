"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown, { type Item } from "./Dropdown.tsx";

export default function CarFilter(props: { makers: Item[]; years: Item[] }) {
	const [maker, setMaker] = useState<string>();
	const [year, setYear] = useState<string>();

	useEffect(() => {
		console.log(`MAKER: ${maker} YEAR: ${year}`);
	}, [maker, year]);

	return (
		<>
			<div className="flex gap-8">
				<Dropdown
					name="makeName"
					items={props.makers}
					label="Maker"
					placeholder="Choose Maker"
					onChange={(v) => setMaker(v)}
				/>
				<Dropdown
					name="makeYear"
					items={props.years}
					label="Year"
					placeholder="Choose Year"
					onChange={(v) => setYear(v)}
				/>
			</div>
			<div>
				<Link href={`/result/${maker}/${year}`} passHref>
					<button
						className="bg-sky-900 px-4 py-2 rounded-md text-white
						hover:bg-sky-950 disabled:bg-sky-200"
						disabled={!maker || !year}
					>
						Next
					</button>
				</Link>
			</div>
		</>
	);
}
