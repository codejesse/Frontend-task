import styled from "styled-components";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    height: auto;
    margin-left: 12rem;
`;

const NavItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    margin: 2rem;
`;

const NavItems = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    margin: auto;
`;

const StatusColors = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: red;
    margin: auto;
    margin-right: 10px;
`;

const AvatarWrapper = styled.div`
    /* margin-left: 2rem; */
    width: 50%;
`;

const Avatar = styled.div`
    margin: 0.55rem;
    float: right;
`;

const TopNav = () => {
    return (
        <NavWrapper>
            <NavItemsWrapper>
                <NavItems><StatusColors style={{backgroundColor: "grey"}} />Published</NavItems>
                <NavItems><StatusColors style={{backgroundColor: "green"}} />Scheduled</NavItems>
                <NavItems><StatusColors style={{backgroundColor: "yellow"}} />Need Approval</NavItems>
                <NavItems><StatusColors style={{backgroundColor: "red"}} />Error</NavItems>
                <NavItems><StatusColors style={{backgroundColor: "blue"}} />Notes</NavItems>
            </NavItemsWrapper>
            <AvatarWrapper>
                <Avatar><img src="/Profile.png" alt="profile-pic" width="63px" height="63px" /></Avatar>
            </AvatarWrapper>
        </NavWrapper>
    );
}

export default TopNav;
