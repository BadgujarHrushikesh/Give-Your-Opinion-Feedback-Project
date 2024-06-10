import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit className='my-icon' color='purple' />
            </button>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                {/* <FaTimes color='purple' height={50}/> */}
                <FaTimes color='purple' height={50} width={50} />

            </button>
            <div className='test-display'>{item.text}</div>
        </Card>
    )
}
export default FeedbackItem