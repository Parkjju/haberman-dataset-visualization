import styled from 'styled-components';

export const Box = styled.div`
    width: 60%;
    margin: 20px auto;
    display: flex;
    height: auto;
    justify-content: space-between;
    @media (max-width: 720px) and (min-width: 540px) {
        width: 80%;
        min-width: 200px;
    }
    @media (max-width: 539px) {
        width: 40%;
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
