import {Avatar, Card, CardHeader, Container, Grid, IconButton, Menu, MenuItem, Skeleton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {red} from '@mui/material/colors';
import {useEffect, useState} from "react";

function MCard(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {setAnchorEl(event.currentTarget);};
	const handleClose = () => {setAnchorEl(null);};

	const [date, set_date] = useState();
	useEffect(() => {
		setTimeout(()=>set_date(props.date), 3000);
	}, [props.date]);

	return (
		<Card>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: red[500] }}>{props.title[0]}</Avatar>}
				action={<IconButton onClick={handleClick}><MoreVertIcon /></IconButton>}
				title={props.title}
				subheader={date?date:<Skeleton variant="text" />}
			/>
			<Skeleton variant="rectangular" height={118} />
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>I like it!</MenuItem>
			</Menu>
		</Card>


	);
}


export default function SecondEx() {
	const sizes = { lg: 3, md: 4, xs: 6 };

	const tt = new Date();
	const dd = String(tt.getDate()).padStart(2, '0');
	const mm = String(tt.getMonth() + 1).padStart(2, '0');
	const today = mm + '/' + dd + '/' + tt.getFullYear();

	const data = [
		{title: "1", date: today},
		{title: "2", date: today},
		{title: "3", date: today},
		{title: "4", date: today},
	];

	return (
		<Container sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				{data.map((d, i) => (
					<Grid key={i} item {...sizes}>
						<MCard title={d.title} date={d.date}/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}