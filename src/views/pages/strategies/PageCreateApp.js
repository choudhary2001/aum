// ** React Imports
import { Fragment, useState, useEffect, useRef } from 'react'

// ** Reactstrap Imports
import { Card, Modal, Button, CardBody, CardText, CardTitle, ModalBody, ModalHeader } from 'reactstrap'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Icons Imports
import { Book, Package, Command, CreditCard, Check } from 'react-feather'

// ** Reactstrap Imports
import { Input, ListGroup, ListGroupItem } from 'reactstrap'
import PickerDateTime from '../../forms/form-elements/datepicker/PickerDateTime'
// ** Icons Imports
import { Briefcase, ShoppingCart, Award, ArrowLeft, ArrowRight } from 'react-feather'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

// ** Steps
import SubmitStep from '../modal-examples/create-app-steps/SubmitStep'
import DetailsStep from '../modal-examples/create-app-steps/DetailsStep'
import BillingStep from '../modal-examples/create-app-steps/BillingStep'
import DatabaseStep from '../modal-examples/create-app-steps/DatabaseStep'
import FrameworkStep from '../modal-examples/create-app-steps/FrameworkStep'

// ** Styles
import '@styles/react/pages/modal-create-app.scss'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const CreateAppPage = () => {
  // ** Ref
  const ref = useRef(null)

  // ** States
  const [show, setShow] = useState(false)
  const [stepper, setStepper] = useState(null)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://8414-49-37-183-136.ngrok-free.app/api/trade/strategy/createStrategyInfo');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let value;

  if (data) {
    value = data;
  }
  else {

    value = {
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
      "Segement": [
        "Equity",
        "Futures",
        "Options"
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
  }


  const brokerOptions = value.Brokers.map((broker) => ({ value: broker, label: broker }));
  const stragiesOptions = value.stragies.map((stragie) => ({ value: stragie, label: stragie }));
  const exchangeOptions = value.Exchange.map((exchange) => ({ value: exchange, label: exchange }));
  const o_typeOptions = value.o_type.map((o_t) => ({ value: o_t, label: o_t }));
  const sorder_typeOptions = value.order_type.map((order_typ) => ({ value: order_typ, label: order_typ }));
  const E_typeOptions = value.E_type.map((e_type) => ({ value: e_type, label: e_type }));
  const time_frameOptions = value.time_frame.map((time_fram) => ({ value: time_fram, label: time_fram }));
  const scriptOptions = value.script.map((scrip) => ({ value: scrip, label: scrip }));
  const segementsOptions = value.Segement.map((segement) => ({ value: segement, label: segement }));

  const [formData, setFormData] = useState({
    Name: '',
    Brokers: '',
    stragies: '',
    segment: '',
    Exchange: '',
    script: [],
    Quantity: '',
    time_frame: '',
    o_type: '',
    order_type: '',
    B1: '',
    B2: '',
    B3: '',
    B1input: '',
    B2input: '',
    B3input: '',
    New_day: '',
    start_date: '',
    end_date: '',
    E_type: ''
  });

  const handleInputChange = (field, value) => {
    console.log(field, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [field]: value,
      };
    });
  };

  const handleStartDateChange = (date) => {
    console.log(date);
    setFormData((prevFormData) => ({
      ...prevFormData,
      start_date: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      end_date: date,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log(formData);
    if (!formData.Name || !formData.Brokers || !formData.stragies || !formData.Exchange) {
      alert('Please fill in all compulsory fields.');
      return;
    }
    try {
      const formattedFormData = {
        strategyDetails: {
          Name: formData.Name,
          Brokers: formData.Brokers.value,
          stragies: formData.stragies.value,
          Exchange: formData.Exchange.value,
          segment: formData.segment.value,
          script: [formData.script.value],
          Qunatity: formData.quantity,
          time_frame: formData.time_frame.value,
          o_type: formData.o_type.value,
          order_type: formData.order_type.value,
          B1: formData.B1,
          B2: formData.B2,
          B3: formData.B3,
          B1input: formData.B1input,
          B2input: formData.B2input,
          B3input: formData.B3input,
          start_date: formData.start_date,
          end_date: formData.end_date,
          E_type: formData.E_type
        }
      };

      console.log(formattedFormData);

      const response = await fetch('https://1217-49-37-180-104.ngrok-free.app/api/trade/strategy/addStrategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedFormData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Rest of the code remains the same

  const steps = [
    {
      id: 'details',
      title: 'Details',
      // subtitle: 'Enter App Details.',
      icon: <Book className='font-medium-3' />,
      content: <>
        <Fragment>
          <h5>Startegy Name</h5>
          <Input
            placeholder='Startegy Name'
            value={formData.Name}
            onChange={(e) => handleInputChange('Name', e.target.value)}
          />
          <h5 className='mt-1'>Select Startegy</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.stragies}
            onChange={(selectedOption) => handleInputChange('stragies', selectedOption)}
            options={stragiesOptions}
            isClearable={false}
          />
          <h5 className='mt-1'>Broker</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.Brokers}
            onChange={(selectedOption) => handleInputChange('Brokers', selectedOption)}
            options={brokerOptions}
            isClearable={false}
          />
          <h5 className='mt-1'>Exchange</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.Exchange}
            onChange={(selectedOption) => handleInputChange('Exchange', selectedOption)}
            options={exchangeOptions}
            isClearable={false}
          />
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
      </>
    },
    {
      id: 'frameworks',
      title: 'Instrument',
      // title: 'Instrument',
      // subtitle: 'Select Framework',
      icon: <Package className='font-medium-3' />,
      content: <>
        <Fragment>
          <h5>Segement</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.segment}
            onChange={(selectedOption) => handleInputChange('segment', selectedOption)}
            options={segementsOptions}
            isClearable={false}
          />
          <h5 className='mt-1'>Script</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.script}
            onChange={(selectedOption) => handleInputChange('script', selectedOption)}
            options={scriptOptions}
            isClearable={false}
          />
          <h5 className='mt-1'>Quantity</h5>
          <Input
            placeholder='10'
            value={formData.quantity}
            onChange={(e) => handleInputChange('quantity', e.target.value)}
          />
          <h5 className='mt-1'>Time Frame</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.time_frame}
            onChange={(selectedOption) => handleInputChange('time_frame', selectedOption)}
            options={time_frameOptions}
            isClearable={false}
          />
          <h5 className='mt-1'>O Type</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.o_type}
            onChange={(selectedOption) => handleInputChange('o_type', selectedOption)}
            options={o_typeOptions}
            isClearable={false}
          />

          <h5 className='mt-1'>Order type</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.order_type}
            onChange={(selectedOption) => handleInputChange('order_type', selectedOption)}
            options={sorder_typeOptions}
            isClearable={false} />
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
      </>
    },
    {
      id: 'database',
      title: 'Buffers',
      // title: 'Database',
      // subtitle: 'Select Database',
      icon: <Command className='font-medium-3' />,
      content: <>
        <Fragment>
          <h5 className='mt-1'>B1</h5>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30% !important" }}>
              <select style={{
                padding: "10px",
                borderRadius: "10px"
              }}
                value={formData.B1}
                onChange={(e) => handleInputChange('B1', e.target.value)}

              >
                <option >Select</option>
                <option value="Point">Point</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>
            <Input style={{ width: "70%" }} type='number' placeholder='20'
              value={formData.B1input}
              onChange={(e) => handleInputChange('B1input', e.target.value)} />
          </div>
          <h5 className='mt-1'>B2</h5>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30% !important" }}>
              <select style={{
                padding: "10px",
                borderRadius: "10px"
              }}
                value={formData.B2}
                onChange={(e) => handleInputChange('B2', e.target.value)}

              >
                <option >Select</option>
                <option value="Point">Point</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>
            <Input style={{ width: "70%" }} type='number' placeholder='20'
              value={formData.B2input}
              onChange={(e) => handleInputChange('B2input', e.target.value)} />
          </div>
          <h5 className='mt-1'>B3</h5>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30% !important" }}>
              <select style={{
                padding: "10px",
                borderRadius: "10px"
              }}
                value={formData.B3}
                onChange={(e) => handleInputChange('B3', e.target.value)}

              >
                <option >Select</option>
                <option value="Point">Point</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>
            <Input style={{ width: "70%" }} type='number' placeholder='20'
              value={formData.B3input}
              onChange={(e) => handleInputChange('B3input', e.target.value)} />
          </div>
          <h5 className='mt-1'>New Day</h5>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            value={formData.New_day}
            onChange={(selectedOption) => handleInputChange('New_day', selectedOption)}
            options={time_frameOptions}
            isClearable={false} />

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
      </>
    },
    {
      id: 'submit',
      title: 'Execution Time',
      // title: 'Submit',
      // subtitle: 'Review & Submit',
      icon: <Check className='font-medium-3' />,
      content:
        <>
          <div className=''>
            <h5 className='mt-1'>Start Date & Time</h5>
            <div className='start-timer'>
              <DatePicker value={formData.start_date}
                selected={formData.start_date}
                onChange={handleStartDateChange}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                timeCaption='Time'
                dateFormat='MMMM d, yyyy h:mm aa'
                className='form-control' minDate={Date()} />
            </div>
            <h5 className='mt-1'>End Date & Time</h5>
            <div className='end-timer'>
              <DatePicker
                value={formData.end_date}
                selected={formData.end_date}
                onChange={handleEndDateChange}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={15}
                timeCaption='Time'
                dateFormat='MMMM d, yyyy h:mm aa'
                className='form-control'
              />
            </div>
            <h5 className='mt-1'>E Type</h5>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              value={formData.E_type}
              onChange={(selectedOption) => handleInputChange('E_type', selectedOption)}
              options={E_typeOptions}
              isClearable={false} />
            <div className='d-flex justify-content-between mt-3'>
              <Button color='primary' onClick={() => stepper.previous()}>
                <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
                <div className='align-middle d-sm-inline-block d-none'>Previous</div>
              </Button>
              <Button
                color='success'
                onClick={handleSubmit}>
                <div className='align-middle d-sm-inline-block d-none'>Submit</div>
                <Check size={14} className='align-middle ms-sm-50 ms-0' />
              </Button>
            </div>
          </div>
        </>
    }
  ]




  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>
          <Package className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Create Strategy</CardTitle>
          <CardText>Provide application data with this form modal popup example, easy to use in any page.</CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-3 px-sm-3'>
          <h1 className='text-center mb-1'>Create App</h1>
          <p className='text-center mb-2'>Provide application data with this form</p>
          <Wizard
            ref={ref}
            steps={steps}
            type='vertical'
            headerClassName='border-0'
            options={{ linear: false }}
            instance={el => setStepper(el)}
            contentClassName='shadow-none'
            className='bg-transparent create-app-wizard shadow-none'
          />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default CreateAppPage
