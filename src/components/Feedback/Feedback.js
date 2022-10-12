import { useState } from "react";
import { Box } from "../Box";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section} from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const option = {good, neutral, bad};
    const keys = Object.keys(option);

    const countsNumberClick = (option) => {
           if (option === keys[0]) {
            setGood(prevState => prevState+1);
           }
           else if (option ===  keys[1] ) {
            setNeutral(prevState => prevState+1)
           }
           else if (option === keys[2]) {
            setBad(prevState => prevState+1)
           }
         };

        
// Інший варіант countsNumberClick:

    // const countsNumberClick = (feedBackItem) => {
    //     switch(feedBackItem){
    //         case 'good':
    //          setGood(prevState => prevState+1);
    //          break;

    //         case 'neutral':
    //           setNeutral(prevState => prevState+1);
    //           break;

    //          case 'bad':
    //            setBad(prevState => prevState+1);
    //            break;

    //           default:
    //             break;      
    //     }  
    //   };

    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => good*100/countTotalFeedback();

        const total = countTotalFeedback();
        const positeveFeedback = countPositiveFeedbackPercentage() ?
        Math.ceil(countPositiveFeedbackPercentage())
        : 0;
        return (
            <Box pl={5}>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions 
                    options={keys}
                    onLeaveFeedback={countsNumberClick}  />
                </Section>
                <Section title={"Statistics"}>
                    {total > 0 ? 
                    <Statistics good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={total} 
                    positeveFeedback={positeveFeedback} />
                    : <Notification message={"There is no feedback"} />}
                </Section>
            </Box>
        )
}