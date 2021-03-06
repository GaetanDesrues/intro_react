import {useEffect, useState} from "react";
import {Button, Chip, Stack, TextField} from "@mui/material";


async function send_data(data) {
    const opts = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    };

    const r = await fetch('http://localhost:3456', opts);
    return r.json();
}


export default function SimpleForm() {
    const [button_value, set_button_value] = useState("");
    const [connected, set_conn] = useState(false);

    const handle_click = (e) => {
        e.preventDefault();
        set_button_value("");
        send_data({data: button_value}).then(
            r => alert(r.data)
        );
    };

    const handle_change = e => set_button_value(e.target.value.trim());

    useEffect(() => {
        send_data({})
            .then(()=>set_conn(true))
            .catch(()=>set_conn(false));
    }, [connected]);

    return (
        <Stack spacing="10px" alignItems="center" justifyContent="center" height="100vh">
            <Chip label={connected?"Connected":"Not connected"}
                  color={connected?"success":"error"}
                  variant="outlined" sx={{marginBottom: "25px"}}/>
            <TextField label="Enter something" variant="outlined" onChange={handle_change} value={button_value}/>
            <Button variant={connected?"outlined":"disabled"} onClick={handle_click}>Send</Button>
        </Stack>
    );
}


