import { useState } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { WheaterInfo } from '../../interfaces/interfaces'

interface props {
    getWheaterInfo:  (e: string) => void,
    date: Date,
    wheaterInfo: WheaterInfo,
}

const Navbar = ({getWheaterInfo, date, wheaterInfo}: props) => {

    const [show, setShow] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        }
        setShow(open);
    };

    return (
        <>
            <Header 
                toggleDrawer={toggleDrawer} 
                date={date}
                wheaterInfo={wheaterInfo}
            />
            <SideBar 
                show={show} 
                toggleDrawer={toggleDrawer}
                getWheaterInfo={getWheaterInfo}
            />
        </>
    )
}

export default Navbar
