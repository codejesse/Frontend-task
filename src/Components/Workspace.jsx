import styled from "styled-components";
import TopNav from "./TopNav";
import JsonData from './data.json'
// import { useState } from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const WorkspaceWrapper = styled.div`
     display: flex;
     flex-direction: column;
     background: #F5F7F8;
     width: 100%;
     height: auto;
     float: right;
     margin-left: 5rem;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    margin-left: 15rem;
`;

const ActionColor = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    /* background: #3AC183; */
    background-color: ${props => 
        props.status === 0 ? 'blue'
        : props.status === 1 ? '#3AC183'
        : props.status === 2 ? 'yellow'
        : props.status === 3 ? 'grey'
        : props.status === 4 ? 'red'
        : 'none'
    };
    width: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

const StatusIcon = styled.div`
    margin: auto;
`;

const CardTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1.2rem;
`;

const TopDetails = styled.div`
    width: 100%;
    height: 30px;
    color: #ACACAC;
`;

const CardDesc = styled.div`
    width: 100%;
    height: auto;
    color: #959595;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin-top: -0.45rem;
    & img {
        height: 200px;
        width: 100%;
    }
`;

const StatsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    width: 100%;
    height: 30px;
`;

const Statsitem = styled.div`
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 369px;
    height: 446px;
    background: #FFFFFF;
    border: 1px solid #E5E6EE;
    border-radius: 10px;
    margin-right: 1rem;
    margin-bottom: 1rem;
`;


const Workspace = () => {
    // can use state here but i'll need like a server to serve the data
    // const [data, setData] = useState([])

    //0 for Need Approval, 1 for Scheduled, 2 for Publishing, 3 for Published, 4 for Error
    const data1 = JsonData.posts_by_date["2021-06-17"]  
    console.log(data1)
    const addDefaultSrc = (ev) => {
        ev.target.src = "/Error.png"
    }
    return (
        <WorkspaceWrapper>
            <TopNav />
            <CardWrapper>
                {data1.map((info) => {
                    const date = new Date(info.created_at)
                    const dateModify = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
                    return (
                        <Card key={info.updated_at}>
                            <ActionColor status = {info.status}>
                                <StatusIcon>
                                    <FacebookOutlinedIcon style={{ color: 'white' }} />
                                </StatusIcon>
                            </ActionColor>
                            <CardTop>
                                <TopDetails>
                                    <p>{dateModify}</p>
                                </TopDetails>
                                <CardDesc><p>{info.entry.message}</p></CardDesc>
                                <ImageWrapper>
                                    <img onError={addDefaultSrc} src={info.entry.image} alt={info.account.name} />
                                </ImageWrapper>
                                <StatsWrapper>
                                    <div><ThumbUpOutlinedIcon style={{ color: '#444444', margin: "2px" }} /> 0 </div>
                                    <div><ModeCommentOutlinedIcon style={{ color: '#444444' }} /> 0 </div>
                                    <div><ShareOutlinedIcon style={{ color: '#444444' }} /> 0 </div>
                                    <div> <VisibilityOutlinedIcon style={{ color: '#444444' }} /> 0 </div>
                                </StatsWrapper>
                            </CardTop>
                        </Card>
                    )
                })}
            </CardWrapper>
        </WorkspaceWrapper>
    );
}

export default Workspace;