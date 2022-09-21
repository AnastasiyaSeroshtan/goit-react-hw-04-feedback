import PropTypes from 'prop-types';
import { Box } from "../../Box";
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Box>
            { options.map(option => (
                    <Button key={option} 
                            type="button" 
                            onClick={() => onLeaveFeedback(option)}>
                                {option}
                    </Button>
                ))
            }
        </Box>
    )
};

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};


