import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";
import Copyright from "../src/components/Copyright";

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
					Material UI - Next.js example
				</Typography>
				<Link href="/about" passHref>
					<Button variant="contained" color="primary" sx={{ mb: 2 }}>
						Halaman About
					</Button>
				</Link>
				<Copyright />
			</Box>
		</Container>
	);
}
