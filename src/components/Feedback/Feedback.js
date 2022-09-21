import React from "react";
import { Box } from "../Box";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section} from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

    countsNumberClick = (option) => {
            this.setState(prevState => {
                return {
                    [option]: prevState[option] + 1,
                }
            })
         };

     countTotalFeedback = () =>{
        return (
            this.state.good + this.state.neutral + this.state.bad
        )
     };

     countPositiveFeedbackPercentage = () => {
        return (
            this.state.good*100/this.countTotalFeedback()
        )
     };

    render() {
        const total = this.countTotalFeedback();
        const positeveFeedback = this.countPositiveFeedbackPercentage() ?
        Math.ceil(this.countPositiveFeedbackPercentage())
        : 0;
        return (
            <Box pl={5}>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions 
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.countsNumberClick}  />
                </Section>
                <Section title={"Statistics"}>
                    {total > 0 ? 
                    <Statistics good={this.state.good} 
                    neutral={this.state.neutral} 
                    bad={this.state.bad} 
                    total={total} 
                    positeveFeedback={positeveFeedback} />
                    : <Notification message={"There is no feedback"} />}
                </Section>
            </Box>
        )
    }
}