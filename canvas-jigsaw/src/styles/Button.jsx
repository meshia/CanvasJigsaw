import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: inherit;
    cursor: pointer;
    border-color: var(--base-boder);
    transition: border-color 0.2s;
    &:hover {
        border-color: var(--border-hover);
    }
`;