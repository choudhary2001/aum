// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

/* Demo Components
import CompanyTable from './CompanyTable' 
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import { kFormatter } from '@utils'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import CardCongratulations from '../../ui-elements/cards/advance/CardCongratulations'*/
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import ApexCandleStickChart from '@src/views/charts/apex/ApexCandleStickChart'
// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const EcommerceDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)
  // ** vars
  const trackBgColor = '#e9ecef'
  // ** Hooks
  const [isRtl] = useRTL()
  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col xl='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
        <Col xl='4' md='6' xs='12' className='congra-stati-container'>
          <CardMedal />
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='12' md='12'>
          <ApexCandleStickChart
            direction={isRtl ? 'rtl' : 'ltr'}
            success={colors.success.main}
            danger={colors.danger.main} />
        </Col>
      </Row>
       {/* <Row className='match-height'>
        <Col lg='12' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row> */}
    </div>
  )
}

export default EcommerceDashboard
