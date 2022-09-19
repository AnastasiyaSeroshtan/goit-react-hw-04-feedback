import { Box } from "../../Box";
import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onClickGood, onClickNeutral, onClickBad}) => {
    return (
        <Box mb={5}>
            <Button type="button" onClick={onClickGood}>Good</Button>
            <Button type="button" onClick={onClickNeutral}>Neutral</Button>
            <Button type="button" onClick={onClickBad}>Bad</Button>
        </Box>
    )
};