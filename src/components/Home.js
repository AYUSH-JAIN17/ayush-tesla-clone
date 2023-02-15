import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order Online for touchless delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for touchless delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model 3"
            description="Order Online for touchless delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="Order Online for touchless delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Lowest cost Solar Panels in America"
            description="Money Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roof costs less than a new roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}
//we will use props(parameters for a function) to change the car images for different sections
export default Home

// using styled we can style the divs in js,rather than usiing css
const Container=styled.div`
    height:100vh;
    `
    // occupies the entire viewport(the height of the browser)