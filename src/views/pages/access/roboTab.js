import React from 'react'
import { Fragment, useContext } from 'react'
import RevenueReport from '/src/views/ui-elements/cards/analytics/RevenueReport'
import SupportTracker from '/src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col } from 'reactstrap'
// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const RoboTab = () => {
  const context = useContext(ThemeColors)
  return (
    <Fragment>
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <SupportTracker primary={context.colors.primary.main} danger={context.colors.danger.main} />
        </Col>
        <Col lg='6' sm='12'>
          <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default RoboTab;