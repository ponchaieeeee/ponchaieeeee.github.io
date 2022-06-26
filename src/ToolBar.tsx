import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    filter: Filter;
    onToggleDrawer: () => void;
}

export const ToolBar = (props: Props) => {

    const translator = (arg: Filter) => {
        switch (arg) {
            case 'all':
                return 'ALL TASKS';
            case 'checked':
                return 'CURRENT TASKS';
            case 'unchecked':
                return 'COMPLETED TASKS';
            case 'removed':
                return 'TRASH';
            default:
                return '';
        }
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={props.onToggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>{translator(props.filter)}</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}