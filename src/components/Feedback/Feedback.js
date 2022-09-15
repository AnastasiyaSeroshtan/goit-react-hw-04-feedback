import React from "react";
import { Box } from "../Box";
import { FeedbackText, StatisticsText, Button, StatisticsItem } from "./Feedback.styled";

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    render() {
        return (
            <Box pl={5}>
                <FeedbackText>Please leave feedback</FeedbackText>
                <Box mb={5}>
                <Button type="button">Good</Button>
                <Button type="button">Neutral</Button>
                <Button type="button">Bad</Button>
                </Box>
                <StatisticsText>Statistics</StatisticsText>
                <Box as="ul">
                    <StatisticsItem>Good: </StatisticsItem>
                    <StatisticsItem>Neutral: </StatisticsItem>
                    <StatisticsItem>Bad: </StatisticsItem>
                </Box>
            </Box>
        )
    }
}