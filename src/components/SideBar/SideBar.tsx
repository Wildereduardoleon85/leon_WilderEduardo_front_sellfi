import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { ListItem, ListItemText, Box } from '@material-ui/core';
import { useFetchList } from '../../hooks/useFetchList'

interface props {
  show: boolean,
  toggleDrawer: any,
  getWheaterInfo: (e: string) => void
}

export default function SideBar({show, toggleDrawer, getWheaterInfo}: props) {

  const { data } = useFetchList()

  return (
      <Drawer
        anchor='left'
        open={show}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <List>
            {data.map(item =>(
              <ListItem 
                key={item.codigo}
                button
                id={item.codigo}
                onClick={(e) => getWheaterInfo(e.currentTarget.id)}
              >
                <ListItemText>
                  {item.ciudad}
                </ListItemText>
              </ListItem>
              ))}
            </List>
        </Box>
      </Drawer>
  );
}