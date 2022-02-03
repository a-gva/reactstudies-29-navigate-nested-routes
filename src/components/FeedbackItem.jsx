// Component that shows a single feedback item, including the rating and a text

import { FaTimes } from 'react-icons/fa'
import propTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {


    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card >)
}

FeedbackItem.propTypes = {
    item: propTypes.object.isRequired,
}


export default FeedbackItem;
