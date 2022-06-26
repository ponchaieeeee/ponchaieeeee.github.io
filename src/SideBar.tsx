import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DeleteIcon from '@mui/icons-material/Delete';
import SubjectIcon from '@mui/icons-material/Subject';
import CreateIcon from '@mui/icons-material/CreateRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import QrCodeIcon from '@mui/icons-material/QrCode';

import { styled } from '@mui/material/styles';
import { indigo, lightBlue, pink } from '@mui/material/colors';
import pjson from '../package.json'

type Props = {
    drawerOpen: boolean;
    onToggleDrawer: () => void;
    onSort: (filter: Filter) => void;
    onToggleQR: () => void;
}

const DrawerList = styled('div')(() => ({
    width: 250,
}));

const DrawerHeader = styled('div')(() => ({
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
    padding: '1em',
    backgroundColor: indigo[500],
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

const IconUnChecked = styled(RadioButtonUncheckedIcon)(() => ({
    color: lightBlue[500],
}));
const IconCompleted = styled(CheckCircleIcon)(() => ({
    color: pink['A200'],
}));

export const SideBar = (props: Props) => {
    return(
        <Drawer
            variant="temporary"
            open={props.drawerOpen}
            onClose={props.onToggleDrawer}
        >
            <DrawerList role="presentation" onClick={props.onToggleDrawer}>
                <DrawerHeader>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                        <CreateIcon />
                    </Avatar>
                    <p>TODO v{pjson.version}</p>
                </DrawerHeader>              
                <List>
                    <ListItem button onClick={() => props.onSort('all')}>
                        <ListItemIcon>
                            <SubjectIcon />
                        </ListItemIcon>
                        <ListItemText secondary="aaa" />
                    </ListItem>
                    <ListItem button onClick={() => props.onSort('unchecked')}>
                        <ListItemIcon>
                            <IconUnChecked />
                        </ListItemIcon>
                        <ListItemText secondary="bbb" />
                    </ListItem>
                        <ListItem button onClick={() => props.onSort('checked')}>
                        <ListItemIcon>
                            <IconCompleted />
                        </ListItemIcon>
                        <ListItemText secondary="ccc" />
                    </ListItem>
                    <ListItem button onClick={() => props.onSort('removed')}>
                        <ListItemIcon>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText secondary="ddd" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={props.onToggleQR}>
                        <ListItemIcon>
                            <QrCodeIcon />
                        </ListItemIcon>
                        <ListItemText secondary="Share" />
                    </ListItem>
                </List>
            </DrawerList>
        </Drawer>
    )
}