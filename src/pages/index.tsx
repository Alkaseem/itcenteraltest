import React from 'react'
import PropTypes from 'prop-types'

import LeftSide from './sections/left-side'
import MiddleSide from './sections/middle-side'
import RightSide from './sections/right-side'
import Layout from '../components/Layout'

const Dashboard = () => {
    return (
        <Layout>
            <LeftSide />
            <MiddleSide />
            <RightSide />
        </Layout>
    )
}

Dashboard.propTypes = {}

export default Dashboard
