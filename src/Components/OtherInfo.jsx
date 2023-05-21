import styled from 'styled-components';

const StyledContainer = styled.div`
    display: block;
    width: 300px;
    align-items: center;
    margin: 20px auto;
    height: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const OtherInfo = () => {
    return ( 
        <StyledContainer>
            <input type="text" placeholder="nationality...."/>
            <input type="text" placeholder="other...."/>
        </StyledContainer>
    );
}
 
export default OtherInfo;