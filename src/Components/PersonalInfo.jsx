import styled from 'styled-components';

const StyledContainer = styled.div`
    display: block;
    width: 300px;
    align-items: center;
    margin: 20px auto;
    height: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const PersonalInfo = () => {
    return ( <StyledContainer>
        <input type="text" placeholder="First Name...."/>
        <input type="text" placeholder="Last Name...."/>
        <input type="text" placeholder="UserName"/>
    </StyledContainer> );
}
 
export default PersonalInfo;