import propTypes from 'prop-types';
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

// npm i framer-motion@4.1.17

function FeedbackList({ feedbackPropValue, handleDelete }) {

    if (!feedbackPropValue || feedbackPropValue.length === 0) {
        return <p>Nenhum feedback recebido</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence >
                {feedbackPropValue.map((item) => (
                    // <div>{item.rating}</div>
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}</AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedbackPropValue.map((item) => (
    //             // <div>{item.rating}</div>
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired
        })
    )
}

export default FeedbackList;