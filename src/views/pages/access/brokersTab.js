import React from 'react'
import { Fragment, useState } from 'react'
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

import ApiKey from '/src/views/pages/api-key'
import EditUserExample from '/src/views/pages/modal-examples/EditUser'

import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

const BrokersTab = () => {
  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' }
  ]

  const countryOptions = [
    { value: 'uk', label: 'UK' },
    { value: 'usa', label: 'USA' },
    { value: 'france', label: 'France' },
    { value: 'russia', label: 'Russia' },
    { value: 'canada', label: 'Canada' }
  ]

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'dutch', label: 'Dutch' }
  ]

  const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
  }

  const [show, setShow] = useState(false)

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }


  return (
    <>
      <Button color='primary' onClick={() => setShow(true)}>
        Add
      </Button>
      <br />
      <Row className='match-height'>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>
        <Col md="2">
          <EditUserExample />
        </Col>


      </Row>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Edit Broker Information</h1>
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <p>1.Updating user details will receive a privacy audit.</p>
            <Col md={6} xs={12}>
              <Label className='form-label' for='firstName'>
                Encyption Key
              </Label>
              <Controller
                control={control}
                name='firstName'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='firstName'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  )
                }}
              />
              {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                Web Client Code
              </Label>
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='lastName' placeholder='Doe' invalid={errors.lastName && true} />
                )}
              />
              {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col xs={12}>
              <Label className='form-label' for='username'>
                Web Password
              </Label>
              <Controller
                name='username'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='username' placeholder='john.doe.007' invalid={errors.username && true} />
                )}
              />
              {errors.username && <FormFeedback>Please enter a valid Username</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='email'>
                Web DOB
              </Label>
              <Input type='email' id='email' placeholder='example@domain.com' />
            </Col>

            <Col md={6} xs={12}>
              <Label className='form-label' for='tax-id'>
                App Source
              </Label>
              <Input id='tax-id' defaultValue='Tax-8894' placeholder='Tax-1234' />
            </Col>
            <p>Updating user details will receive a privacy audit.</p>
            <p>2.Updating user details will receive a privacy audit.</p>
            <Col md={4} xs={4}>
              <Button type='submit' className='me-1' color='primary'>
                Generate Links
              </Button>
            </Col>
            <Col md={12} xs={12}>
              <p>Redirect URL : details will receive a privacy audit.</p>

              <p>PostBack URL : details will receive a privacy audit.</p>

              <p>3.Updating user details will receive a privacy audit.</p>

              <Label className='form-label' for='contact'>
                Traing API - API KEY
              </Label>
              <Input type='password' id='contact' defaultValue='+1 609 933 4422' placeholder='+1 609 933 4422' />
              <Label className='form-label' for='contact'>
                Traing API - API SERET
              </Label>
              <Input type='password' id='contact' defaultValue='+1 609 933 4422' placeholder='+1 609 933 4422' />
            </Col>
            {/* <Col md={6} xs={12}>
              <Label className='form-label' for='language'>
                Language
              </Label>
              <Select
                id='language'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={languageOptions}
                theme={selectThemeColors}
                defaultValue={languageOptions[0]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='country'>
                Country
              </Label>
              <Select
                id='country'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                defaultValue={countryOptions[0]}
              />
            </Col>
            <Col xs={12}>
              <div className='d-flex align-items-center'>
                <div className='form-switch'>
                  <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                  <Label className='form-check-label' htmlFor='billing-switch'>
                    <span className='switch-icon-left'>
                      <Check size={14} />
                    </span>
                    <span className='switch-icon-right'>
                      <X size={14} />
                    </span>
                  </Label>
                </div>
                <Label className='form-check-label fw-bolder' htmlFor='billing-switch'>
                  Use as a billing address?
                </Label>
              </div>
            </Col> */}
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='secondary' outline onClick={() => setShow(false)}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>

  )
}

export default BrokersTab;