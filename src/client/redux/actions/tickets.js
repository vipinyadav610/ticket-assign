import {
  ON_CREATE_TICKET_MODALTOGGLE,
  ADD_CREATE_TICKET_LIST,
  ASSIGN_TICKET_TOGGLE,
  ASSIGN_LIST
} from 'constants/tickets'

export const onCreateTicketsModalToggle = isVisible => {
  return {
    type: ON_CREATE_TICKET_MODALTOGGLE,
    isVisible
  }
}

export const addToTicketList = values => {
  return {
    type: ADD_CREATE_TICKET_LIST,
    values
  }
}

export const onAssignModalToggle = record => {
  return {
    type: ASSIGN_TICKET_TOGGLE,
    record
  }
}

export const onAssignList = agents => {
  return {
    type: ASSIGN_LIST,
    agents
  }
}
