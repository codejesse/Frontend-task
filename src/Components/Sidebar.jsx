import { useState } from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const SideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 66px;
    background: #2A2F33;
    position: fixed;
`;

const NavLogoWrapper = styled.div`
    display: flex;
    width: 274px;
    height: 51px;
    background: #31363B;
    padding: 10px;
    font-size: 20px;
    z-index: 9999999;
`;


const NavIconsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SideLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 9999999;
`;

const NavLogo = styled.h2`
    color: white;
    font-size: 35px;
    margin: auto;
`;

const NavIcons = styled.div`
    border-radius: 20px;
    margin-bottom: 10px;
    & img{
        width: 37px;
        height: 37px;
        border-radius: 8px;
        opacity: 40%;
    }
    & img:hover {
        opacity: 100%;
        cursor: pointer;
    }
`;

const ActiveLink = styled.div`
    background: orange;
    width: 5px;
    height: 20px;
    border-radius: 20px;
    float: left;
    margin: auto;
`;


const Sidebar = () => {
    //state can be dynamic to allow multiple users have specific nav-links when clicked
    //if there is data for users we can map through them and write a function if the id matches the users id display the navlinks for that user
    //since that data isn't available i'll make the all the sidebar icons toggle the navlinks component.
    const [isOpen, setIsOpen] = useState(false)

    const NavClick = () => {
        console.log('Working on it')
        //Toggle state value
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <SideWrapper>
            <NavLogoWrapper><NavLogo>Sociality.io</NavLogo></NavLogoWrapper>
            <NavIconsWrapper>
                <NavIcons onClick={NavClick}><img src="/logo.png" alt='logo' /></NavIcons>
                <NavIcons onClick={NavClick}><img src="/logo.png" alt='logo' /></NavIcons>
                <NavIcons onClick={NavClick}><img src="/logo.png" alt='logo' /></NavIcons>
                <NavIcons onClick={NavClick}><img src="/logo.png" alt='logo' /></NavIcons>
            </NavIconsWrapper>
            <SideLinksWrapper>
                {isOpen ? <Navlinks /> : console.log("closed")}
            </SideLinksWrapper>
        </SideWrapper>
    );
}

export default Sidebar;
