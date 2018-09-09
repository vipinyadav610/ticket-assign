import {
  ON_CREATE_TICKET_MODALTOGGLE,
  ADD_CREATE_TICKET_LIST,
  ASSIGN_TICKET_TOGGLE,
  ASSIGN_LIST
} from 'constants/tickets'
const intitialState = {
  isCreateTicketModalOpen: false,
  ticketsList: [],
  record: null,
  agents: [
    {
      id: 1,
      name: 'Vipin',
      email: 'vipin@gmail.com',
      phone: '9992305993',
      issues: []
    },
    {
      id: 2,
      name: 'Shashank',
      email: 'shashank@gmail.com',
      phone: '9992305993',
      issues: []
    },
    {
      id: 3,
      name: 'niki',
      email: 'niki@gmail.com',
      phone: '9992305993',
      issues: []
    },
    {
      id: 4,
      name: 'gaurav',
      email: 'gaurav@gmail.com',
      phone: '9992305993',
      issues: []
    },
    {
      id: 5,
      name: 'Vikas',
      email: 'vikas@gmail.com',
      phone: '9992305993',
      issues: []
    }
  ]
}

export default (state = intitialState, action) => {
  switch (action.type) {
    case ON_CREATE_TICKET_MODALTOGGLE:
      return { ...state, isCreateTicketModalOpen: action.isVisible }
    case ADD_CREATE_TICKET_LIST:
      return { ...state, ticketsList: [...state.ticketsList, action.values] }
    case ASSIGN_TICKET_TOGGLE:
      return { ...state, record: action.record }
    case ASSIGN_LIST:
      return { ...state, agents: action.agents }
    default:
      return state
  }
}
