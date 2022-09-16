import styled from "styled-components";

export const FeedbackText = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.space[2]}px;
    margin-right: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;

    :last-child{
        margin-right: ${p => p.theme.space[0]}px;
    }

    :hover{
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    };
`;

export const StatisticsText = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StatisticsItem = styled.li`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
`;

export const StatisticsItemTotal = styled.li`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[2]}px;
`;