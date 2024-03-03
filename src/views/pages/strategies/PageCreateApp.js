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
import { Briefcase, ShoppingCart, Award, ArrowLeft, ArrowRight, Trash2 } from 'react-feather'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'



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
  const [selectedStrategy, setSelectedStrategy] = useState(null);



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
        "BR",
        "OS1",
        "OS2",
        "R Breakout",
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
    quantity: '',
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
    E_type: '',
    showExpiryDay: '',
    TriggerRule: '',
    exit_date: '',
    ExTrigger: '',
    ExTriggerinput: '',
    ExTarget: '',
    ExTargetinput: '',

    option: '',
    position: '',
    strike: '',
    tradeDay: '',
    expiry: '',
    rPeriod: '',
    rField: '',
    overBrought: '',
    overSold: '',
    rPanel: '',
    bPeriod: '',
    bfield: '',
    deviation: '',
    movingAverage: '',
    bPanel: '',
    mPeriod: '',
    mField: '',
    mType: '',
    mPanel: '',
    Trigger: '',
    Triggerinput: '',
    Target: '',
    Targetinput: '',
    STrigger: '',
    STriggerinput: '',
    Sl: '',
    Slinput: '',
    TriggerPrice: '',
    TriggerPriceinput: '',
    Price: '',
    Priceinput: '',
    bquantity: ''

  });

  // const handleInputChange = (field, value) => {
  //   console.log(field, value);
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [field]: value,
  //     };
  //   });
  // };

  const handleInputChange = (field, value) => {
    console.log(field, value);
    if (field === 'stragies') {
      setSelectedStrategy(value ? value.value : null);
    }
    if (name === 'showExpiryDay') {
      setFormData(prevState => ({
        ...prevState,
        showExpiryDay: value,
      }));
    }
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

  const handleExitDateChange = (date) => {
    console.log(date);
    setFormData((prevFormData) => ({
      ...prevFormData,
      exit_date: date,
    }));
  };


  const handleEndDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      end_date: date,
    }));
  };

  const handleStrategyChange = (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      strategy: selectedOption,
    }));
  };


  const optionTypeOptions = value && value.OptionType ? value.OptionType.map((optionType) => ({ value: optionType, label: optionType })) : [];

  const [legs, setLegs] = useState([]);

  const [legformData, setLegFormData] = useState({
    option: '',
    position: '',
    strike: '',
    tradeDay: '',
    expiry: '',
    bquantity: '',
    Trigger: '',
    Triggerinput: '',
    Target: '',
    Targetinput: '',
    STrigger: '',
    STriggerinput: '',
    Sl: '',
    Slinput: '',
    TriggerPrice: '',
    TriggerPriceinput: '',
    Price: '',
    Priceinput: '',

  });


  const addLeg = () => {

    const updatedLegs = [...legs];

    // Add the current formData as a new leg to the array
    updatedLegs.push({ ...formData });

    // Update the state with the new legs array
    setLegs(updatedLegs);

    // Clear the form after adding a leg
    // setLegFormData({
    //   option: '',
    //   position: '',
    //   strike: '',
    //   tradeDay: '',
    //   expiry: '',
    //   bquantity: '',
    //   Trigger: '',
    //   Triggerinput: '',
    //   Target: '',
    //   Targetinput: '',
    //   STrigger: '',
    //   STriggerinput: '',
    //   Sl: '',
    //   Slinput: '',
    //   TriggerPrice: '',
    //   TriggerPriceinput: '',
    //   Price: '',
    //   Priceinput: '',
    // });
  };

  const deleteLeg = (index) => {
    const updatedLegs = [...legs];
    updatedLegs.splice(index, 1);
    setLegs(updatedLegs);
  };


  const dynamicFields = {
    OS1: (
      <>
        {/* Render OS1-specific fields here */}
        {/* Example: */}
        <h5 className='mt-1'>OS1 Strategy</h5>
        <h5 className='mt-1'>Option</h5>
        <input
          type='radio'
          name="option"
          value="Ce"
          checked={formData.option === "Ce"}
          onChange={(e) => handleInputChange('option', e.target.value)}
        /> &nbsp; Ce &nbsp;

        <input
          type='radio'
          name="option"
          value="Pe"
          checked={formData.option === "Pe"}
          onChange={(e) => handleInputChange('option', e.target.value)}
        /> &nbsp; Pe

        <h5 className='mt-1'>Position</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="position"
          value={formData.position}
          onChange={(e) => handleInputChange('position', e.target.value)}
        >
          <option>Select</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <h5 className='mt-1'>Strike</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="strike"
          value={formData.strike}
          onChange={(e) => handleInputChange('strike', e.target.value)}
        >
          <option>Select</option>
          <option value="ITM6" >ITM6</option>
          <option value="ITM5" >ITM5</option>
          <option value="ITM4" >ITM4</option>
          <option value="ITM3" >ITM3</option>
          <option value="ITM2" >ITM2</option>
          <option value="ITM1" >ITM1</option>
          <option value="OTM1" >OTM1</option>
          <option value="OTM2" >OTM2</option>
          <option value="OTM3" >OTM3</option>
          <option value="OTM4" >OTM4</option>
          <option value="OTM5" >OTM5</option>
          <option value="OTM6" >OTM6</option>
        </select>
        <h5 className='mt-1'>Trade Type</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="tradeDay"
          value={formData.tradeDay}
          onChange={(e) => handleInputChange('tradeDay', e.target.value)}
        >
          <option>Select</option>
          <option value="Position" >Position</option>
          <option value="Intraday">Intraday</option>
        </select>
        <h5 className='mt-1'>Expiry</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="expiry"
          value={formData.expiry}
          onChange={(e) => handleInputChange('expiry', e.target.value)}
        >
          <option>Select</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        <h5 className='mt-1'>Quantity</h5>
        <Input
          placeholder='10'
          value={formData.bquantity}
          onChange={(e) => handleInputChange('bquantity', e.target.value)}
        />


        <h5 className='mt-1'>Trigger</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Trigger}
              onChange={(e) => handleInputChange('Trigger', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Triggerinput}
            onChange={(e) => handleInputChange('Triggerinput', e.target.value)} />
        </div>

        <h5 className='mt-1'>Target</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Target}
              onChange={(e) => handleInputChange('Target', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Targetinput}
            onChange={(e) => handleInputChange('Targetinput', e.target.value)} />
        </div>


        <h5 className='mt-1'>S Trigger</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.STrigger}
              onChange={(e) => handleInputChange('STrigger', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.STriggerinput}
            onChange={(e) => handleInputChange('STriggerinput', e.target.value)} />
        </div>

        <h5 className='mt-1'>Sl</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Sl}
              onChange={(e) => handleInputChange('Sl', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Slinput}
            onChange={(e) => handleInputChange('Slinput', e.target.value)} />
        </div>

        <Button color='primary' style={{ margin: "3px" }} onClick={addLeg} >Add Leg</Button>
        <table  >
          <tbody>
            {legs.map((leg, index) => (
              <tr key={index} border="1">
                {/* Display leg fields */}
                {/* Example: */}
                <td style={{ border: "1px solid #dddddd" }}>{leg.option}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.position}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.strike}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.tradeDay}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.expiry}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.bquantity}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.Trigger} {leg.Triggerinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.Target} {leg.Targetinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.STrigger} {leg.STriggerinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.Sl} {leg.Slinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>
                  <Trash2 size={14} className='rotate-rtl align-middle me-sm-50 me-0' style={{ color: "red" }} onClick={() => deleteLeg(index)} />

                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </>
    ),
    OS2: (
      <>
        {/* Render OS1-specific fields here */}
        {/* Example: */}
        <h5 className='mt-1'>OS2 Strategy</h5>
        <h5 className='mt-1'>Option</h5>
        <input
          type='radio'
          name="option"
          value="Ce"
          checked={formData.option === "Ce"}
          onChange={(e) => handleInputChange('option', e.target.value)}
        /> &nbsp; Ce &nbsp;

        <input
          type='radio'
          name="option"
          value="Pe"
          checked={formData.option === "Pe"}
          onChange={(e) => handleInputChange('option', e.target.value)}
        /> &nbsp; Pe

        <h5 className='mt-1'>Position</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="position"
          value={formData.position}
          onChange={(e) => handleInputChange('position', e.target.value)}
        >
          <option>Select</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <h5 className='mt-1'>Strike</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="strike"
          value={formData.strike}
          onChange={(e) => handleInputChange('strike', e.target.value)}
        >
          <option>Select</option>
          <option></option>

        </select>

        <h5 className='mt-1'>Trigger Price</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.TriggerPrice}
              onChange={(e) => handleInputChange('TriggerPrice', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.TriggerPriceinput}
            onChange={(e) => handleInputChange('TriggerPriceinput', e.target.value)} />
        </div>

        <h5 className='mt-1'>Price</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Price}
              onChange={(e) => handleInputChange('Price', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Priceinput}
            onChange={(e) => handleInputChange('Priceinput', e.target.value)} />
        </div>



        <h5 className='mt-1'>Trade Type</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="tradeDay"
          value={formData.tradeDay}
          onChange={(e) => handleInputChange('tradeDay', e.target.value)}
        >
          <option>Select</option>
          <option>Position</option>
          <option>Intraday</option>
        </select>

        <h5 className='mt-1'>Expiry</h5>
        <select style={{
          margin: 0,
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
        }}
          name="expiry"
          value={formData.expiry}
          onChange={(e) => handleInputChange('expiry', e.target.value)}
        >
          <option>Select</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>

        <h5 className='mt-1'>Quantity</h5>
        <Input
          placeholder='10'
          value={formData.bquantity}
          onChange={(e) => handleInputChange('bquantity', e.target.value)}
        />


        <h5 className='mt-1'>Target</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Target}
              onChange={(e) => handleInputChange('Target', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Targetinput}
            onChange={(e) => handleInputChange('Targetinput', e.target.value)} />
        </div>

        <h5 className='mt-1'>S Trigger</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.STrigger}
              onChange={(e) => handleInputChange('STrigger', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.STriggerinput}
            onChange={(e) => handleInputChange('STriggerinput', e.target.value)} />
        </div>

        <h5 className='mt-1'>Sl</h5>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30% !important" }}>
            <select style={{
              padding: "10px",
              borderRadius: "10px"
            }}
              value={formData.Sl}
              onChange={(e) => handleInputChange('Sl', e.target.value)}

            >
              <option >Select</option>
              <option value="Point">Point</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
          <Input style={{ width: "70%" }} type='number' placeholder='20'
            value={formData.Slinput}
            onChange={(e) => handleInputChange('Slinput', e.target.value)} />
        </div>

        <Button color='primary' style={{ margin: "3px" }} onClick={addLeg} >Add Leg</Button>
        <table  >
          <tbody>
            {legs.map((leg, index) => (
              <tr key={index} border="1">

                <td style={{ border: "1px solid #dddddd" }}>{leg.option}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.position}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.strike}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.TriggerPrice} {leg.TriggerPriceinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.Price} {leg.Priceinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.tradeDay}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.expiry}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.bquantity}</td>
                {/* <td>{leg.Trigger} {leg.Triggerinput}</td> */}
                <td style={{ border: "1px solid #dddddd" }}>{leg.Target} {leg.Targetinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.STrigger} {leg.STriggerinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>{leg.Sl} {leg.Slinput}</td>
                <td style={{ border: "1px solid #dddddd" }}>
                  <Trash2 size={14} className='rotate-rtl align-middle me-sm-50 me-0' style={{ color: "red" }} onClick={() => deleteLeg(index)} />

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
    "R Breakout": (
      <>
        <h5 className='mt-1'>R Breakout Strategy</h5>
        <h5 className='mt-1'>R Period</h5>
        <Input
          placeholder='Enter R Period'
          name="rPeriod"
          value={formData.rPeriod}
          onChange={(e) => handleInputChange('rPeriod', e.target.value)}
        />
        <h5 className='mt-1'>R Field</h5>
        <Input
          placeholder='Enter R Field'
          value={formData.rField}
          name="rField"
          onChange={(e) => handleInputChange('rField', e.target.value)}
        />
        <h5 className='mt-1'>Over Brought</h5>
        <Input
          placeholder='Enter Over Brought'
          value={formData.overBrought}
          name="overBrought"
          onChange={(e) => handleInputChange('overBrought', e.target.value)}
        />
        <h5 className='mt-1'>Over Sold</h5>
        <Input
          placeholder='Enter Over Sold'
          value={formData.overSold}
          name="overSold"
          onChange={(e) => handleInputChange('overSold', e.target.value)}
        />
        <h5 className='mt-1'>R Panel</h5>
        <Input
          placeholder='Enter R Panel'
          value={formData.rPanel}
          name="rPanel"
          onChange={(e) => handleInputChange('rPanel', e.target.value)}
        />

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


      </>
    ),
    BR: (
      <>
        <h5 className='mt-1'>BR Strategy</h5>
        <h5 className='mt-1'>B Period</h5>
        <Input
          placeholder='Enter B Period'
          value={formData.bPeriod}
          name="bPeriod"
          onChange={(e) => handleInputChange('bPeriod', e.target.value)}
        />
        <h5 className='mt-1'>B Field</h5>
        <Input
          placeholder='Enter B Field'
          value={formData.bfield}
          name="bfield"
          onChange={(e) => handleInputChange('bfield', e.target.value)}
        />
        <h5 className='mt-1'>Deviation</h5>
        <Input
          placeholder='Enter Deviation'
          value={formData.deviation}
          name="deviation"
          onChange={(e) => handleInputChange('deviation', e.target.value)}
        />
        <h5 className='mt-1'>Moving Average</h5>
        <Input
          name="movingAverage"
          placeholder='Enter Moving Average'
          value={formData.movingAverage}
          onChange={(e) => handleInputChange('movingAverage', e.target.value)}
        />
        <h5 className='mt-1'>Over B Panel</h5>
        <Input
          placeholder='Enter B Panel'
          value={formData.bPanel}
          name="bPanel"
          onChange={(e) => handleInputChange('bPanel', e.target.value)}
        />
        <h5 className='mt-1'>R Period</h5>
        <Input
          placeholder='Enter R Period'
          value={formData.rPeriod}
          name="rPeriod"
          onChange={(e) => handleInputChange('rPeriod', e.target.value)}
        />
        <h5 className='mt-1'>R Field</h5>
        <Input
          placeholder='Enter R Field'
          value={formData.rField}
          name="rField"
          onChange={(e) => handleInputChange('rField', e.target.value)}
        />
        <h5 className='mt-1'>Over Brought</h5>
        <Input
          placeholder='Enter Over Brought'
          value={formData.overBrought}
          name="overBrought"
          onChange={(e) => handleInputChange('overBrought', e.target.value)}
        />
        <h5 className='mt-1'>Over Sold</h5>
        <Input
          placeholder='Enter Over Sold'
          value={formData.overSold}
          name="overSold"
          onChange={(e) => handleInputChange('overSold', e.target.value)}
        />
        <h5 className='mt-1'>R Panel</h5>
        <Input
          placeholder='Enter R Panel'
          value={formData.rPanel}
          name="rPanel"
          onChange={(e) => handleInputChange('rPanel', e.target.value)}
        />

        <h5 className='mt-1'>M Period</h5>
        <Input
          placeholder='Enter M Period'
          value={formData.mPeriod}
          name="mPeriod"
          onChange={(e) => handleInputChange('mPeriod', e.target.value)}
        />
        <h5 className='mt-1'>M Field</h5>
        <Input
          placeholder='Enter M Field'
          value={formData.mField}
          name="mField"
          onChange={(e) => handleInputChange('mField', e.target.value)}
        />
        <h5 className='mt-1'>M Type</h5>
        <Input
          placeholder='Enter M Type'
          value={formData.mType}
          name="mType"
          onChange={(e) => handleInputChange('mType', e.target.value)}
        />
        <h5 className='mt-1'>M Panel</h5>
        <Input
          placeholder='Enter M Panel'
          value={formData.mPanel}
          name="mPanel"
          onChange={(e) => handleInputChange('mPanel', e.target.value)}
        />
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

      </>
    ),
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log(formData);
    console.log(legs);
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
          E_type: formData.E_type,
          showExpiryDay: formData.showExpiryDay,
          TriggerRule: formData.TriggerRule,
          exit_date: formData.exit_date,
          ExTrigger: formData.ExTrigger,
          ExTriggerinput: formData.ExTriggerinput,
          ExTarget: formData.ExTarget,
          ExTargetinput: formData.ExTargetinput,
          legs: legs,

          option: formData.option,
          position: formData.position,
          strike: formData.strike,
          bquantity: formData.bquantity,
          tradeDay: formData.tradeDay,
          expiry: formData.expiry,
          rPeriod: formData.rPeriod,
          rField: formData.rField,
          overBrought: formData.overBrought,
          overSold: formData.overSold,
          rPanel: formData.rPanel,
          bPeriod: formData.bPeriod,
          bfield: formData.bfield,
          deviation: formData.deviation,
          movingAverage: formData.movingAverage,
          bPanel: formData.bPanel,
          mPeriod: formData.mPeriod,
          mField: formData.mField,
          mType: formData.mType,
          mPanel: formData.mPanel
        }
      };

      console.log(formattedFormData);

      const response = await fetch('http://52.64.9.118:8000/api/trade/strategy/addStrategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedFormData),
      });
      console.log(response)
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
          {formData.strategy && dynamicFields[formData.strategy.value]}
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
          {selectedStrategy ? dynamicFields[selectedStrategy]
            : (
              <>
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

              </>
            )
          }


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
      id: 'expiry',
      title: 'Expirt Day',
      // title: 'Database',
      // subtitle: 'Select Database',
      icon: <Command className='font-medium-3' />,
      content:
        <>
          <Fragment>
            <input type='checkbox' name='showExpiryDay'
              checked={formData.showExpiryDay}
              onChange={(e) => handleInputChange('showExpiryDay', e.target.checked)} /> &nbsp; Expiry Day
            {formData.showExpiryDay && (
              <>
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


                <h5 className='mt-1'>Trigger Rule</h5>

                <div style={{ width: "100% !important" }}>
                  <select style={{
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                    value={formData.TriggerRule}
                    onChange={(e) => handleInputChange('TriggerRule', e.target.value)}

                  >
                    <option >Select</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Exit Date">Exit Date</option>
                  </select>
                </div>

                <h5 className='mt-1'>Trigger</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "30% !important" }}>
                    <select style={{
                      padding: "10px",
                      borderRadius: "10px"
                    }}
                      value={formData.ExTrigger}
                      onChange={(e) => handleInputChange('ExTrigger', e.target.value)}

                    >
                      <option >Select</option>
                      <option value="Point">Point</option>
                      <option value="Percentage">Percentage</option>
                    </select>
                  </div>
                  <Input style={{ width: "70%" }} type='number' placeholder='20'
                    value={formData.ExTriggerinput}
                    onChange={(e) => handleInputChange('ExTriggerinput', e.target.value)} />
                </div>
                <h5 className='mt-1'>Target</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "30% !important" }}>
                    <select style={{
                      padding: "10px",
                      borderRadius: "10px"
                    }}
                      value={formData.ExTarget}
                      onChange={(e) => handleInputChange('ExTarget', e.target.value)}

                    >
                      <option >Select</option>
                      <option value="Point">Point</option>
                      <option value="Percentage">Percentage</option>
                    </select>
                  </div>
                  <Input style={{ width: "70%" }} type='number' placeholder='20'
                    value={formData.ExTargetinput}
                    onChange={(e) => handleInputChange('ExTargetinput', e.target.value)} />
                </div>

                {formData.TriggerRule == 'Exit Date' && (
                  <>
                    <h5 className='mt-1'>Exit Date & Time</h5>
                    <div className='start-timer'>
                      <DatePicker value={formData.exit_date}
                        selected={formData.exit_date}
                        onChange={handleExitDateChange}
                        showTimeSelect
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        timeCaption='Time'
                        dateFormat='MMMM d, yyyy h:mm aa'
                        className='form-control' minDate={Date()} />
                    </div>
                  </>
                )}


              </>
            )}
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
