import { useState } from 'react';
import styled from 'styled-components';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const NavLinksWrapper = styled.div`
    height: 100vh;
    width: 230px;
    background: #393D42;
    margin-top: -12.5rem;
    margin-left: 4rem;
`;

const NavItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

const NavItems = styled.div`
   display: flex;
   flex-direction: row;
   color:  white;
   margin-bottom: 1rem;
`;

const AccordionItem = styled.div`
    display: flex;
    flex-direction: column;
    color:  white;
    margin-bottom: 1rem;
    cursor: pointer;
`;

const AccordionDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;
`;

const AccordionTitle = styled.div`
   display: flex;
   flex-direction: row;
   color: white;
`;

const CountWrapper = styled.div`
    border: 1px solid red;
    padding: 2px;
    width: 30px;
    margin: auto;
    border-radius: 7px;
    border: 1px solid #73D9C7;
    text-align: center;
`;

const AccordionButton = styled.div`
   display: flex;
   justify-content: right;
   width: 50%;
`;


const Navlinks = () => {
    const [isActive, setIsActive] = useState(false)

    //data can be improved for iterating 
    const accordionData = {
        title: 'PUBLISH',
        icon: '',
        content1: 'Compose',
        content2: 'Feed',
        count: 29
    };

    const { title, icon, count, content1, content2 } = accordionData;

    return (
        <NavLinksWrapper>
            <NavItemsWrapper>
                <NavItems><NotificationsActiveOutlinedIcon />NOTIFICATIONS <CountWrapper>{count}</CountWrapper></NavItems>
                {/* TODO: map through a list of the nav-items and display them instead of hard-coding */}
                <AccordionItem>
                    <AccordionTitle onClick={() => setIsActive(!isActive)}><BorderColorOutlinedIcon/>{title} <AccordionButton>{isActive ? '-' : '+'}</AccordionButton></AccordionTitle>
                    {isActive && (
                        <div>
                            <AccordionDiv>{content1}</AccordionDiv>
                            <AccordionDiv>{content2}</AccordionDiv>
                        </div>
                    )
                    }
                </AccordionItem>
            </NavItemsWrapper>
        </NavLinksWrapper>
    );
}

export default Navlinks;