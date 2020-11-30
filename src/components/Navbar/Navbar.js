import styled from 'styled-components/macro';
import { FaBars, FaTimes } from 'react-icons/fa'


export const Nav = styled.div`
     width: 100%;
     min-width: 1000px;
     background: ${({bgColor}) => (bgColor ? '#2764': '#235')};
     display: flex;
     justify-content: center;
     align-items: center;
`;


// export const NavRow = styled.div`
//      display: grid;
//      /* justify-content: space-between;
//       */
//       grid-template-columns: 1fr 1fr 1fr;
//      align-items: center;
    
// `;

export const NavColumn = styled.div`
       flex: 1;
       
      /* margin-left: 15px;
      margin-right: 15px; */
`;

export const NavLogo = styled.h1`
       color: white;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       font-size: 25px;
       font-weight: 700;
`;

// export const NavList = styled.ul`
//        display: flex;
//        justify-content: flex-end;
//        align-items: center;
//        font-size: 1.5rem;
//        list-style: none;

//        @media screen  and (max-width : 960px){
//            display: block;
//        }
// `;

// export const NavItem = styled.li`
//        color: #fff;
//        margin-left: 25px;
//        padding: 1.5px;
//        cursor: pointer;
//        font-weight: 600;

//        &:hover{
//           color: green;
//        }
// `;

export const Bars = styled(FaBars)`
       color: #ffffff;
       font-size: 16px;
`;

export const Times = styled(FaTimes)`
       color: #ffffff;
       font-size: 16px;
`;
export const NavInput = styled.input`
       color: grey;
       border-radius: 25px;
       /* width: 50% */
`