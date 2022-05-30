import React from 'react';
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="data:image/jpeg;base64,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" />
            </Background>
            <ImageTitle>
                <img src="data:image/png;base64,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" />
            </ImageTitle>
            <Controls>
                <PLayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PLayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese-Canadian woman suffering from empty nest syndrome gets a second shot at motherhood when one of her handmade dumplings comes alive.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
height:100%;
object-fit:cover;
}

`

const ImageTitle = styled.div`
 height:30vh;
 min-height:170px;
 width:35vw;
min-width:200px;
margin-top:60px

 img{
    width:100%;
    height:100%;
    object-fit:contain;
 }

`
const Controls = styled.div`
display:flex;
align-items:center;
 `
const PLayButton = styled.button`
border-radius:4px;
font-size: 15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background:rgb(249, 249, 249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background:rgb(198,198,198);
}
`
const TrailerButton = styled(PLayButton)`
background:rgb(0,0,0,0.3);
border: 1px solid rgb(249, 249, 249);
color:rgb(249, 249, 249);
text-transform:uppercase;

`
const AddButton = styled.button`
width:44px;
height:44px;
display:flex;
align-items:center;
margin-right:22px;
    justify-content:center;
    border-radius:50%;
    border: 2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
span{
    font-size:30px;
    color:white;
    
}

`
const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0);
 `

const SubTitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
 `

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
max-width:760px;
 `
