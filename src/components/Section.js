import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

//u can do Section(props) and then access the parameters using {props.blahblah}
//or u can unpack it
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImg={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {/* Only if the right button exists display it...this will ensure that if only left button needs to be displayed then it will displayed in the center*/}
                {
                    rightBtnText&&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/Images/down-arrow.svg"/>
        </Buttons>
        </Fade>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;//background image will cover the entire container by streching or cutting a little bit
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props=>`url("/images/${props.bgImg}")`};
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
`
const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    //when the size of the screen is less than 760 px
    @media(max-width:760px){
        flex-direction:column;
    }
    `
    
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.8;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`

const RightButton=styled(LeftButton)`
    background-color:white;
    color:black;

`
// .(LeftButton) inherits all the styling of leftbutton

const DownArrow=styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`

const Buttons=styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`