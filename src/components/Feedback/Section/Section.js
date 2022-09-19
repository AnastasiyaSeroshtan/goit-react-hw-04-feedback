import { Box } from "../../Box";
import { FeedbackText } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
       < Box as="section">
            <FeedbackText>{title}</FeedbackText>
            {children}
       </Box>
    )
}; 