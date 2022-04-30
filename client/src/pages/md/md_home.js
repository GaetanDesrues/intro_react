import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Box, IconButton, ListItem, ListItemButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function MItem(props) {
	return (
		<ListItem disablePadding secondaryAction={
			<IconButton onClick={()=>{console.log("clicked");}}>
				<DeleteIcon />
			</IconButton>
		}>
			<ListItemButton>
				<ListItemText
					primary={props.fname}
					secondary={props.date}
					onClick={()=>{console.log("clicked line");}}
				/>
			</ListItemButton>
		</ListItem>
	);
}


export default function MdHome() {

	const data = [
		{fname: "filename 1", date: "3 days"},
		{fname: "filename 2", date: "5 days"},
		{fname: "filename 3", date: "1 hour"},
	];

	const content = data.map((d,i) => (
		<MItem key={i} {...d}/>
	)).reduce((prev, curr, i) => [prev, <Divider key={`a${i}`} component="li" />, curr]);

	return (
		<Box display="flex" alignItems="center" justifyContent="center" height="100vh">
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{content}
			</List>
		</Box>
	);
}