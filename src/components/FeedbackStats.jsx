import propTypes from "prop-types"

function FeedbackStats({ feedbackPropValue }) {
    // Calculate ratings average
    let average = feedbackPropValue.reduce(
        (acc, cur) => {
            return acc + cur.rating
        }, 0) / feedbackPropValue.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedbackPropValue.length} Reviews</h4>
            <h4>Avaliação Média: {isNaN(average) ? 0 : average}</h4>
        </div>)
}

FeedbackStats.propTypes = {
    feedbackPropValue: propTypes.array.isRequired,
}

export default FeedbackStats;
