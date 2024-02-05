// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap'

// ** Icons Imports
import { Briefcase, ShoppingCart, Award, ArrowLeft, ArrowRight } from 'react-feather'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

const DetailsStep = ({ stepper }) => {
  const value = {
    "Brokers": [
      "Groww",
      "Zerodha",
      "Angel One",
      "Upstox",
      "ICICIdirect",
      "ICICIdirect",
      "Kotak Securities",
      "HDFC Securities",
      "Motilal Oswal",
      "SBI Securities",
      "Paytm Money",
      "Sharekhan",
      "5paisa",
      "IIFL Securities",
      "AxisDirect",
      "Dhan",
      "Geojit",
      "Choice Broking",
      "SMC Global",
      "Alice Blue",
      "fyres"
    ],
    "stragies": [
      "Trend trading",
      "Range trading",
      "Breakout trading",
      "Reversal trading",
      "Gap trading",
      "Pairs trading",
      "Arbitrage",
      "Momentum trading",
      "S1",
      "BR"
    ],
    "Exchange": [
      "BSE",
      "NSE",
      "MCX",
      "NCDEX",
      "ICEX",
      "CSE"
    ],
    "script": [
      "NIFTY",
      "BANKNIFTY",
      "HDFCBANK",
      "TATAPOWER",
      "TATAPOWER",
      "HAL"
    ],
    "time_frame": [
      "1min",
      "2min",
      "3min",
      "4min",
      "5min",
      "10min",
      "15min",
      "30min",
      "5m",
      "1D",
      "1D",
      "1D",
      "1D",
      "1D",
      "5D",
      "1M",
      "2M",
      "3M",
      "1Y",
      "5Y"
    ],
    "o_type": [
      "Regular",
      "Stop loss",
      "VTT"
    ],
    "order_type": [
      "Market Order",
      "Limit Order",
      "Stop-loss Order",
      "Backet Order",
      "Cover Order",
      "After Market Order",
      "Immediate or cancel Order"
    ],
    "B1": [
      "point",
      "percentage"
    ],
    "B2": [
      "point",
      "percentage"
    ],
    "B3": [
      "point",
      "percentage"
    ],
    "E_type": []
  }

  const brokerOptions = value.Brokers.map((broker) => ({ value: broker, label: broker }));
  const stragiesOptions = value.stragies.map((stragie) => ({ value: stragie, label: stragie }));
  const exchangeOptions = value.Exchange.map((exchange) => ({ value: exchange, label: exchange }));

  return (
    <Fragment>
      <h5>Startegy Name</h5>
      <Input placeholder='Vuexy Admin' />
      <h5 className='mt-1'>Select Startegy</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={stragiesOptions[0]}
        options={stragiesOptions}
        isClearable={false} />
      <h5 className='mt-1'>Broker</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={brokerOptions[0]}
        options={brokerOptions}
        isClearable={false} />
      <h5 className='mt-1'>Exchange</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={exchangeOptions[0]}
        options={exchangeOptions}
        isClearable={false} />
      {/* <ListGroup flush>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='crmRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-info me-1'>
              <Briefcase className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>CRM Application</h5>
                <span>Scales with Any Business</span>
              </div>
              <span>
                <Input type='radio' id='crmRadio' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='ecommPlatform' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-success me-1'>
              <ShoppingCart className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Ecommerce Platforms</h5>
                <span>Grow Your Business With App</span>
              </div>
              <span>
                <Input defaultChecked type='radio' id='ecommPlatform' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='learningPlatform' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-danger me-1'>
              <Award className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Online Learning Platform</h5>
                <span>Start learning today</span>
              </div>
              <span>
                <Input type='radio' id='learningPlatform' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
      </ListGroup> */}
      <div className='d-flex justify-content-between mt-2'>
        <Button color='secondary' outline disabled className='invisible'>
          <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
          <div className='align-middle d-sm-inline-block d-none'>Previous</div>
        </Button>
        <Button color='primary' onClick={() => stepper.next()}>
          <div className='align-middle d-sm-inline-block d-none'>Next</div>
          <ArrowRight size={14} className='rotate-rtl align-middle ms-sm-50 ms-0' />
        </Button>
      </div>
    </Fragment>
  )
}

export default DetailsStep
