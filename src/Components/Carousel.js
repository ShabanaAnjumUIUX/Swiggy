import React from 'react';
import styled from 'styled-components';

function Carousel() {
    const Heading=styled.h1`
    color:red;
    background:blue;
    `
    const FlexContainer=styled.div`
    display:flex;
    flex-wrap:wrap;
    background:pink;
    justify-content:center;
    
    `
    const FlexItem=styled.div`
    width:150px;
    height:150px;
    background:red;
    margin:1px;
    `
  return (
    <>


    <div className='bg-danger text-white p-lg-5 text-center'>
        <h1>This is with bootstrap</h1>
    </div>

    <FlexContainer>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
    </FlexContainer>

    <Heading>Welcome to the carousel section</Heading>
      
    </>
  )
}

export default Carousel;
