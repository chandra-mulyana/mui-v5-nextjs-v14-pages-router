import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link href="https://trisula.com/">Trisula Corporation</Link>{" "}
			{new Date().getFullYear()}.
		</Typography>
	);
}
