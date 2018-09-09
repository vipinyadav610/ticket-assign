import React from 'react'
import presenter from 'hoc/presenter'
import TicketsPM from './indexPM'
import ContainerLayout from 'components/ContainerLayout'
import ContainerHeader from 'components/ContainerHeader'
import TableContainer from 'components/TableContainer'
import columns from './columns'
import { Button } from 'antd'
import * as Actions from 'actions/tickets'
import CreateTickets from './Modal/createTickets'
import AssignTickets from './Modal/assignTickets'
import './index.scss'

const TicketsAssign = props => {
  return (
    <div className="tickets-assign">
      <ContainerHeader
        title="Tickets"
        extra={
          <Button
            type="primary"
            onClick={props.pm.onCreateTicketsModalToggle(true)}
            icon="plus"
            size="large"
          >
            Create Tickets
          </Button>
        }
      />
      <ContainerLayout>
        <AssignTickets {...props} />
        <CreateTickets {...props} />
        <TableContainer
          filterByFields={['name', 'email', 'phone', 'issue']}
          tableProps={{
            dataSource: props.ticketsList,
            columns: columns(props),
            rowKey: (record, i) => i,
            bordered: true
          }}
        />
      </ContainerLayout>
    </div>
  )
}

export default presenter(
  store => ({
    isCreateTicketModalOpen: store.tickets.isCreateTicketModalOpen,
    ticketsList: store.tickets.ticketsList,
    record: store.tickets.record,
    agents: store.tickets.agents
  }),
  Actions
)(TicketsPM, TicketsAssign)
