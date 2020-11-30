import styled from 'styled-components'


export const HOMECONTAINER = styled.div`
       width: 60%;
       /* height: 500px; */
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       grid-gap: 10px;
       place-items: center stretch;
`

export const HOMEITEM = styled.div`
       width: 100%;
       height: 200px;
       display: flex;
       justify-content: center;
       flex-direction: column;
       border: 2px solid lightgray;
       align-items: center;
       box-shadow:1px 3px 15px 1px rgba(0,0,0,0.74);
       margin-top: 50px;
`

export const IMAGE = styled.img`
       width: 100%;
       height: 150px;
       border-radius: 10px;
`

export const ITEMNAME = styled.h1`
       font-size: 16px;
       color: grey;
`