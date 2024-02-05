// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Images
import vueLogo from '@src/assets/images/icons/technology/vue.png'
import laravelLogo from '@src/assets/images/icons/technology/laravel.png'
import angularLogo from '@src/assets/images/icons/technology/angular.png'
import reactNativeLogo from '@src/assets/images/icons/technology/react.png'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

const FrameworkStep = ({ stepper }) => {
  const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]
  const value = {
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

  const o_typeOptions = value.o_type.map((o_t) => ({ value: o_t, label: o_t }));
  const sorder_typeOptions = value.order_type.map((order_typ) => ({ value: order_typ, label: order_typ }));
  // const exchangeOptions = value.Exchange.map((exchange) => ({ value: exchange, label: exchange }));

  return (
    <Fragment>
      <h5>Script</h5>
      <Input placeholder='Vuexy Admin' />
      <h5 className='mt-1'>Quantity</h5>
      <Input placeholder='Vuexy Admin' />
      <h5 className='mt-1'>Time Frame</h5>
      <Input placeholder='Vuexy Admin' />
      <h5 className='mt-1'>O Type</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={o_typeOptions[0]}
        options={o_typeOptions}
        isClearable={false} />
      <h5 className='mt-1'>New Day</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={colourOptions[0]}
        options={colourOptions}
        isClearable={false} />
      <h5 className='mt-1'>Order type</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={sorder_typeOptions[0]}
        options={sorder_typeOptions}
        isClearable={false} />
      {/* <h5>Select Framework</h5>
      <ListGroup flush>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='reactNative' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-info me-1'>
              <img src={reactNativeLogo} alt='reactNative' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>React Native</h5>
                <span>Create truly native apps</span>
              </div>
              <span>
                <Input defaultChecked type='radio' id='reactNative' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='angularRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-danger me-1'>
              <img src={angularLogo} alt='angularLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Angular</h5>
                <span>Most suited to your application</span>
              </div>
              <span>
                <Input type='radio' id='angularRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='vueRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-success me-1'>
              <img src={vueLogo} alt='vueLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Vue</h5>
                <span>Progressive framework</span>
              </div>
              <span>
                <Input type='radio' id='vueRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='laravelRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-warning me-1'>
              <img src={laravelLogo} alt='laravelLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Laravel</h5>
                <span>PHP web framework</span>
              </div>
              <span>
                <Input type='radio' id='laravelRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
      </ListGroup> */}
      <div className='d-flex justify-content-between mt-2'>
        <Button color='primary' onClick={() => stepper.previous()}>
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

export default FrameworkStep
