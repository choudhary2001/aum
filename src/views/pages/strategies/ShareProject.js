// ** React Imports
import { Fragment, useState, useEffect, useRef } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import {
  Card,
  Button,
  Label,
  Modal,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ModalBody,
  ModalHeader,
  DropdownMenu,
  DropdownItem,
  ListGroupItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import Select, { components } from 'react-select'
import { FileText, Users, Link } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Avatars
import avatar1 from '@src/assets/images/avatars/1-small.png'
import avatar2 from '@src/assets/images/avatars/3-small.png'
import avatar3 from '@src/assets/images/avatars/5-small.png'
import avatar4 from '@src/assets/images/avatars/7-small.png'
import avatar5 from '@src/assets/images/avatars/9-small.png'
import avatar6 from '@src/assets/images/avatars/11-small.png'

// ** Portraits
import portrait1 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import portrait2 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import portrait3 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import portrait4 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import portrait5 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import portrait6 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import portrait7 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import portrait8 from '@src/assets/images/portrait/small/avatar-s-6.jpg'



const data = [
  {
    img: portrait1,
    type: 'Can Edit',
    name: 'Lester Palmer',
    username: 'pe@vogeiz.net'
  },
  {
    img: portrait2,
    type: 'Owner',
    name: 'Mittie Blair',
    username: 'peromak@zukedohik.gov'
  },
  {
    img: portrait3,
    type: 'Can Comment',
    name: 'Marvin Wheeler',
    username: 'rumet@jujpejah.net'
  },
  {
    img: portrait4,
    type: 'Can View',
    name: 'Nannie Ford',
    username: 'negza@nuv.io'
  },
  {
    img: portrait5,
    type: 'Can Edit',
    name: 'Julian Murphy',
    username: 'lunebame@umdomgu.net'
  },
  {
    img: portrait6,
    type: 'Can View',
    name: 'Sophie Gilbert',
    username: 'ha@sugit.gov'
  },
  {
    img: portrait7,
    type: 'Can Comment',
    name: 'Chris Watkins',
    username: 'zokap@mak.org'
  },
  {
    img: portrait8,
    type: 'Can Edit',
    name: 'Adelaide Nichols',
    username: 'ujinomu@jigo.com'
  }
]



const ShareProject = () => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://52.64.9.118:8000/api/trade/strategy/fetchallstrategy');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const options = [
  //   { value: 'Donna Frank', label: 'Donna Frank', avatar: avatar1 },
  //   { value: 'Jane Foster', label: 'Jane Foster', avatar: avatar2 },
  //   { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson', avatar: avatar3 },
  //   { value: 'Lori Spears', label: 'Lori Spears', avatar: avatar4 },
  //   { value: 'Sandy Vega', label: 'Sandy Vega', avatar: avatar5 },
  //   { value: 'Cheryl May', label: 'Cheryl May', avatar: avatar6 }
  // ]

  const options = data.map(item => ({
    label: item.strategyName,
    value: item.strategyName,
  }));

  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          {/* <Avatar className='my-0 me-1' size='sm' img={data.avatar} /> */}
          <div>{data.strategyName}</div>
        </div>
      </components.Option>
    )
  }

  const filteredData = data.filter(item =>
    item.strategyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://52.64.9.118:8000/api/trade/strategy/deleteStrategyInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();

      if (response.ok) {
        // Update UI after successful deletion
        setData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error('Error deleting strategy:', result);
      }
    } catch (error) {
      console.error('Error deleting strategy:', error);
    }
  };


  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>
          <FileText className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Edit Strategy</CardTitle>
          <CardText>Elegant Share Project options modal popup example, easy to use in any page.</CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>

      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-4'>
          <h1 className='text-center mb-1'>Strategy</h1>
          <p className='text-center'>Share project with a team members</p>
          <Label for='addMemberSelect' className='form-label fw-bolder font-size font-small-4 mb-50'>
            Search Startegy
          </Label>
          {/* <Select
            options={options}
            // isClearable={false}
            id='addMemberSelect'
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            components={{
              Option: OptionComponent
            }}
          /> */}
          <input type='search' placeholder='Search ..' style={{ width: "100%", padding: "5px", borderRadius: "5px", border: "none", outline: "none" }} value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <p className='fw-bolder pt-50 mt-2'>{data.length} Strategy</p>
          <ListGroup flush className='mb-2'>
            {filteredData.map(item => {
              return (
                <ListGroupItem key={item.id} className='d-flex align-items-start border-0 px-0'>
                  {/* <Avatar className='me-75' img={item.img} imgHeight={38} imgWidth={38} /> */}
                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='me-1'>
                      <h5 className='mb-25'>{item.strategyName}</h5>
                      {/* <span>{item.username}</span> */}
                    </div>
                    <UncontrolledDropdown>
                      <DropdownToggle color='flat-secondary' caret>
                        {/* <span className='d-lg-inline-block d-none'>{item.type}</span> */}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className='w-100'>Edit</DropdownItem>
                        <DropdownItem className='w-100' onClick={() => handleDelete(item.id)} >Delete</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </ListGroupItem>
              )
            })}
          </ListGroup>
          {/* <div className='d-flex align-content-center justify-content-between flex-wrap'>
            <div className='d-flex align-items-center me-2'>
              <Users className='font-medium-2 me-50' />
              <p className='fw-bolder mb-0'>Public to Vuexy - Pixinvent</p>
            </div>
            <a className='fw-bolder' href='#' onClick={e => e.preventDefault()}>
              <Link className='font-medium-2 me-50' />
              <span>Copy project link</span>
            </a>
          </div> */}
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ShareProject
