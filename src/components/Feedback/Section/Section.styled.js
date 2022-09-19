import styled from "styled-components";

export const FeedbackText = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`;