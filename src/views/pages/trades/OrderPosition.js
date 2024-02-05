// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import TableWithButtons from '/src/views/tables/data-tables/basic/TableWithButtons'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

const OrderPosition = () => {
  const name = "Order Position";


  const column = [
    {
      name: 'Instrument',
      minWidth: '250px',
      selector: row => row.Instrument,
    },
    {
      name: 'Streak',
      minWidth: '250px',
      selector: row => row.Streak,
    },
    {
      name: 'Quantity',
      sortable: true,
      minWidth: '150px',
      selector: row => row.Quantity,
    },
    {
      name: 'Avg. Cost',
      sortable: true,
      minWidth: '150px',
      selector: row => row['Avg. Cost'],
    },
    {
      name: 'LTP',
      sortable: true,
      minWidth: '150px',
      selector: row => row.LTP,
    },
    {
      name: 'O Type',
      sortable: true,
      minWidth: '150px',
      selector: row => row['O Type'],

    },
    {
      name: 'P&L',
      sortable: true,
      minWidth: '150px',
      selector: row => row['P&L'],
      cell: row => (
        <Badge color={row['P&L'].includes('-') ? 'light-danger' : 'light-success'} pill>
          {row['P&L'].includes('+') ? (
            <>
              {row['P&L']}
            </>
          ) : (
            <>
              {row['P&L']}
            </>
          )}
        </Badge>
      ),
    },
    {
      name: 'Net Chg.',
      sortable: true,
      minWidth: '150px',
      selector: row => row['Net Chg.'],
      cell: row => (
        <Badge color={row['Net Chg.'].includes('-') ? 'light-danger' : 'light-success'} pill>
          {row['Net Chg.'].includes('+') ? (
            <>
              {row['Net Chg.']}
            </>
          ) : (
            <>
              {row['Net Chg.']}
            </>
          )}
        </Badge>
      ),
    },
    {
      name: 'Segent',
      sortable: true,
      minWidth: '150px',
      selector: row => row['Segent'],
      cell: row => (
        <Badge color={row['Segent'].includes('-') ? 'light-danger' : 'light-success'} pill>
          {row['Segent'].includes('+') ? (
            <>
              {row['Segent']}
            </>
          ) : (
            <>
              {row['Segent']}
            </>
          )}
        </Badge>
      ),
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: () => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pe-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>Details</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Archive size={15} />
                  <span className='align-middle ms-50'>Archive</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                  <Trash size={15} />
                  <span className='align-middle ms-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    }
  ];

  const data = [

    {
      "Instrument": "Streak",
      "Streak": "All",
      "Quantity": 18,
      "Avg. Cost": "₹ 5422.44",
      "LTP": "₹ 0.00",
      "O Type": "₹ 106398.00",
      "P&L": "+ ₹ 8794.00",
      "Net Chg.": "9.01%",
      "Segent": "-0.66%"
    },
    {
      "Instrument": "SGB20161 NSE",
      "Streak": "",
      "Quantity": 1,
      "Avg. Cost": 5335.00,
      "LTP": "₹0.00",
      "O Type": 5976.00,
      "P&L": "+ ₹ 641.00",
      "Net Chg.": "12.01%",
      "Segent": "-3.21%"
    },
    {
      "Instrument": "SGBDEC25-GB NSE",
      "Streak": "1",
      "Quantity": 5335.00,
      "Avg. Cost": "₹0.00",
      "LTP": 30000.00,
      "O Type": "+3260.00",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "0.00%",
      "Segent": "-0.066%"
    },
    {
      "Instrument": "SGBDEC2513-GB NSE 5",
      "Streak": "5348.00",
      "Quantity": 0.00,
      "Avg. Cost": 30000.00,
      "LTP": "+3260.00",
      "O Type": "12.19%",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "-0.066%",
      "Segent": "-0.066%"
    },
    {
      "Instrument": "SGBJUL25-GB NSE",
      "Streak": "18",
      "Quantity": 5310.14,
      "Avg. Cost": "₹0.00",
      "LTP": 107270.10,
      "O Type": "+11687.60",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "-0.01%",
      "Segent": "-0.066%"
    },
    {
      "Instrument": "SGBMAR24-GB NSE",
      "Streak": "18",
      "Quantity": 5371.00,
      "Avg. Cost": "₹0.00",
      "LTP": 107101.80,
      "O Type": "+ ₹ 10423.80",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "0.00%",
      "Segent": "-0.066%"
    }


  ]

  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <TableWithButtons name={name} columns={column} data={data} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default OrderPosition;