import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/core/styles';


const MyListItemText = styled(ListItemText)({
    
    padding:'0 16px',
    '& span, & svg': {
        color: 'rgba(1, 118, 175, 0.95)',
        fontSize: 18,
        fontWeight: 700,
    },
});
const MyExpandLess = styled(ExpandLess)({
    color: 'rgba(1, 118, 175, 0.95)',
        fontSize: 32,
        margin: '0 4px 0 0',
});
const MyExpandMore = styled(ExpandMore)({
    color: 'rgba(1, 118, 175, 0.95)',
        fontSize: 32,
        margin:'0 4px 0 0',
});
  export default function NavItem({item,props}) {

        if (item.type === 'page' && item.type) {
            return (<PageNavItem item={item}/>)
        }
        if (item.type === 'link' && item.type) {
            return (<LinkNavItem item={item}/>)
        }
        else {
            return (null)
        }

        function PageNavItem({ item }) {
            if (item.page && item.page.Url && item.page.NavTitle) {
                return (
                    <ListItemLink href={item.page.Url}>
                        <MyListItemText primary={item.page.NavTitle} />
                    </ListItemLink>
                )
            }
            else {
                return (
                    null
                )
            }
        }
        function LinkNavItem({ item }) {
            const [open, setOpen] = React.useState(false);
            const handleClick = () => {
                setOpen(!open);
            };

            if (item.Title && item.url && item.sub_nav_entries.length == 0) {
                return (
                    <ListItemLink href={item.url}>
                        <MyListItemText primary={item.Title} />
                    </ListItemLink>
                )
            }
            if (item.Title && item.sub_nav_entries.length != 0) {
                return (
                    <>
                        <ListItem button onClick={handleClick}>
                            <MyListItemText primary={item.Title} />
                            {open ? <MyExpandLess /> : <MyExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {item.sub_nav_entries.map((item) => (
                                    <SubNavItem item={item} key={item.id} />
                                ))}
                            </List>
                        </Collapse>
                    </>
                )
            }
            else {
                return (
                    null
                )
            }
            function SubNavItem({ item }) {

                var found = props.subNavEntries.find(function (element) {
                    return element.id == item.id;
                });
                return (
                    <NavItem item={found} />
                )
            }
        }   
        function ListItemLink(props) {
            return <ListItem button component="a" {...props} />;
        }

    }
   