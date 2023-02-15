// type rfce -> it will display
//import React from 'react'
// function Header() {
//     return (
//       <div>  
//       </div>
//     )
//   }
//   export default Header 
import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import {selectCars} from "../features/car/carSlice"
import {useSelector} from 'react-redux'
//useState accepts an initial state and returns two values(current state,f(X) that upadates the state)
function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars)
//changeburgerstatus
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            {cars&&cars.map((car,index)=>
                <a key={index} href="#">{car}</a>
            )}
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            {cars&&cars.map((car,index)=>
                <li><a key={index} href="#">{car}</a></li>
            )}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging Ports</a></li>
            <li><a href="#">Power</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Test Drive</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px; 
    top:0;
    left:0;
    right:0; 
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
    }
    z-index:1;
`
const Menu=styled.div`
    display:flex;
    align-items:center;
    flex:1;//this means that this all other elements will occupy only the space required by them but this element will occupy the rest of the space
    //using flex:1 we can stretch the menu and make sure that right menu sticks to the right 

    @media(max-width:800px)
    {
        display:none;
    }
`
const RightMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:10px;
`
const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:10;//As the container has z index of 1..this burgenav will be pushed above it
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
    // If show is false (which is the default case) than dont show (i.e translatex 100% which means move it to right by 100%...boooom it will disappear)
    transition:transform 0.2s ease-in;
    //adding transition effect on transform
    li{
        padding:15px;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`

const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`
//If u want to align something wrap it and use display flex
const CloseWrapper=styled.div`
    display:flex;
    justify-content:flex-end;
`