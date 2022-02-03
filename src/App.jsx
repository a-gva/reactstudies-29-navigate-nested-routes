// Global state is the data that is shared between all the components within a React application. When the state is changed, or let’s say a filter is added, the components re-render accordingly. https://endertech.com/blog/using-reacts-context-api-for-global-state-management

import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import Card from './components/shared/Card'
import Post from './components/Post'


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Confirm delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header text="29. Navigate & Nested Routes" />
      <div className="container">

        <Routes>
          {/* Home Route */}
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedbackPropValue={feedback} />
              <FeedbackList feedbackPropValue={feedback} handleDelete={deleteFeedback} />
            </>
          }>
          </Route>

          {/* About Route */}
          <Route path='/about' element={<AboutPage />} />

          {/* About Post */}
          <Route path='/post/*' element={<Post />} />


        </Routes>




        {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
