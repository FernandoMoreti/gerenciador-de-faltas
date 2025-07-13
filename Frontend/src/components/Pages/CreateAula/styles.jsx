import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;

    h1 {
        margin: 0;
        font-size: 32px;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    #form-separation {
        display: flex;
        gap: 100px;
    }

    button {
        width: 50%;
        font-size: 16px;
        padding: 10px;
    }

    button:hover {
        background-color: #00ffffb3;
    }
`

export const FormGroup = styled.div`

    display: flex;
    flex-direction: column;

    textarea {
        
        padding: 10px 30px;
        background-color: #fff;
        font-size: 18px;
        text-align: center;
        border-radius: 10px;
        height: 100%;
        
    }
`