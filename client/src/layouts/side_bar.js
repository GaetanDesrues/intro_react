import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {Divider, Link, ListItemButton} from "@mui/material";

export default function TemporaryDrawer() {
	const [left_drawer, set_ldraw] = useState(false);
	const toggleDrawer = (open) => () => {
		set_ldraw(open)
	};

	const list_drawer = (
		<Box
			sx={{width: 250}}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				<ListItemButton component={Link} href="/">
					<ListItemIcon><InboxIcon/></ListItemIcon>
					<ListItemText primary="Home"/>
				</ListItemButton>

				<Divider />

				<ListItemButton component={Link} href="/post_ex">
					<ListItemIcon><InboxIcon/></ListItemIcon>
					<ListItemText primary="Http POST"/>
				</ListItemButton>
			</List>
		</Box>
	);

	return (
		<>
			<Button onClick={toggleDrawer(true)}>
				<MenuIcon color="action"/>
			</Button>
			<Drawer open={left_drawer} onClose={toggleDrawer(false)}>
				{list_drawer}
			</Drawer>
		</>
	);
}