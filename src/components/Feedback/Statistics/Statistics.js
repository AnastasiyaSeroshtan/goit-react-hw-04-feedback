import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { StatisticsItem, StatisticsItemTotal } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positeveFeedback}) => {
    return (
        <Box>
        <Box as="ul" mb={4}>
            <StatisticsItem>Good: {good} </StatisticsItem>
            <StatisticsItem>Neutral: {neutral} </StatisticsItem>
            <StatisticsItem>Bad: {bad} </StatisticsItem>
        </Box>
        <Box as="ul">
            <StatisticsItemTotal>Total: {total} </StatisticsItemTotal>
            <StatisticsItem>Positive feedback: {positeveFeedback}% </StatisticsItem>
        </Box>
    </Box>
    ) 
};

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positeveFeedback: PropTypes.number.isRequired,
};