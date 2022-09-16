import React from "react";
import { Box } from "../Box";
import { FeedbackText, StatisticsText, Button, StatisticsItem, StatisticsItemTotal } from "./Feedback.styled";

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

     countsNumberClickGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        })
     };

     countsNumberClickNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
     };

     countsNumberClickBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
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
                <FeedbackText>Please leave feedback</FeedbackText>
                <Box mb={5}>
                <Button type="button" onClick={this.countsNumberClickGood}>Good</Button>
                <Button type="button" onClick={this.countsNumberClickNeutral}>Neutral</Button>
                <Button type="button" onClick={this.countsNumberClickBad}>Bad</Button>
                </Box>
                <StatisticsText>Statistics</StatisticsText>
                <Box as="ul" mb={4}>
                    <StatisticsItem>Good: {this.state.good} </StatisticsItem>
                    <StatisticsItem>Neutral: {this.state.neutral} </StatisticsItem>
                    <StatisticsItem>Bad: {this.state.bad} </StatisticsItem>
                </Box>
                <Box as="ul">
                    <StatisticsItemTotal>Total:{total} </StatisticsItemTotal>
                    <StatisticsItem>Positive feedback: {positeveFeedback}% </StatisticsItem>
                </Box>
            </Box>
        )
    }
}