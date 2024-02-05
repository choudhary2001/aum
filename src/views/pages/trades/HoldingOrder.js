// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

import TableWithButtons from '/src/views/tables/data-tables/basic/TableWithButtons'

const HoldingOrder = () => {
  const name = "Holding Order";


  const column = [
    {
      name: 'Instrument',
      minWidth: '250px',
      selector: row => row.Instrument,
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
      name: 'Current Value',
      sortable: true,
      minWidth: '150px',
      selector: row => row['Current Value'],

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
      name: 'Segment',
      sortable: true,
      minWidth: '150px',
      selector: row => row['Segment'],
      cell: row => (
        <Badge color={row['Segment'].includes('-') ? 'light-danger' : 'light-success'} pill>
          {row['Segment'].includes('+') ? (
            <>
              {row['Segment']}
            </>
          ) : (
            <>
              {row['Segment']}
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

      "Quantity": 18,
      "Avg. Cost": "₹ 5422.44",
      "LTP": "₹ 0.00",
      "Current Value": "₹ 106398.00",
      "P&L": "+ ₹ 8794.00",
      "Net Chg.": "9.01%",
      "Segment": "-0.66%"
    },
    {
      "Instrument": "SGB20161 NSE",

      "Quantity": 1,
      "Avg. Cost": 5335.00,
      "LTP": "₹0.00",
      "Current Value": 5976.00,
      "P&L": "+ ₹ 641.00",
      "Net Chg.": "12.01%",
      "Segment": "-3.21%"
    },
    {
      "Instrument": "SGBDEC25-GB NSE",

      "Quantity": 5335.00,
      "Avg. Cost": "₹0.00",
      "LTP": 30000.00,
      "Current Value": "+3260.00",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "0.00%",
      "Segment": "-0.066%"
    },
    {
      "Instrument": "SGBDEC2513-GB NSE 5",

      "Quantity": 0.00,
      "Avg. Cost": 30000.00,
      "LTP": "+3260.00",
      "Current Value": "12.19%",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "-0.066%",
      "Segment": "-0.066%"
    },
    {
      "Instrument": "SGBJUL25-GB NSE",

      "Quantity": 5310.14,
      "Avg. Cost": "₹0.00",
      "LTP": 107270.10,
      "Current Value": "+11687.60",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "-0.01%",
      "Segment": "-0.066%"
    },
    {
      "Instrument": "SGBMAR24-GB NSE",

      "Quantity": 5371.00,
      "Avg. Cost": "₹0.00",
      "LTP": 107101.80,
      "Current Value": "+ ₹ 10423.80",
      "P&L": "+ ₹ 3260.00",
      "Net Chg.": "0.00%",
      "Segment": "-0.066%"
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

export default HoldingOrder;