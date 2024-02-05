// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, Card, CardHeader, CardTitle, Table, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import chromeLogo from '@src/assets/images/icons/google-chrome.png'

const OrderNotifications = () => {
  const recentDevicesArr = [
    {
      device: 'Dell XPS 15',
      location: 'United States',
      browser: 'Chrome on Windows',
      activity: '10, Jan 2021 20:07'
    },
    {
      location: 'Ghana',
      device: 'Google Pixel 3a',
      browser: 'Chrome on Android',
      activity: '11, Jan 2021 10:16'
    },
    {
      location: 'Mayotte',
      device: 'Apple iMac',
      browser: 'Chrome on MacOS',
      activity: '11, Jan 2021 12:10'
    },
    {
      location: 'Mauritania',
      device: 'Apple iPhone XR',
      browser: 'Chrome on iPhone',
      activity: '12, Jan 2021 8:29'
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Order Notifications</CardTitle>
      </CardHeader>
      <Table className='text-nowrap text-center' responsive>
        <thead>
          <tr>
            <th className='text-start'>Time Stamp</th>
            <th>Instance</th>
            <th>Type</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {recentDevicesArr.map((item, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{item.activity}</td>
                <td >
                  {/* <img className='me-50' src={chromeLogo} alt={item.device} width='20' height='20' /> */}
                  <span className='fw-bolder'>{item.browser}</span>
                </td>
                <td>{item.device}</td>
                <td>{item.location}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Card>
  )
}

export default OrderNotifications;