import { message } from 'antd'
class TicketsPM {
  constructor(props) {
    this.props = props
  }

  shouldComponentUpdate(props) {
    this.props = props
    return true
  }

  onCreateTicketsModalToggle = isVisible => () => {
    this.props.onCreateTicketsModalToggle(isVisible)
  }

  handleSubmit = form => e => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.addToTicketList(values)
        message.success('Tickets created successfully')
        form.resetFields()
        this.props.onCreateTicketsModalToggle(false)
      } else {
        message.error('Error creating tickets !!!')
      }
    })
  }

  onAssignModalToggle = record => {
    this.props.onAssignModalToggle(record)
  }

  assignTicketFormSubmit = form => e => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const agents = this.props.agents
        agents.forEach(agent => {
          if (agent.id === values.agent) {
            if (agent.issues.length > 3) {
              message.error('Cannot assign more tickets to this agent')
            } else {
              agent.issues.push(this.props.record)
              message.success('Ticket assigned successfully')
            }
          }
          form.resetFields()
        })
        this.onAssignModalToggle(null)
        this.props.onAssignList(agents)
      } else {
        message.error('Error assigning tickets  !!!')
      }
    })
  }

  /**
   * To validate phone numbers
   */
  validateNumber = message => (rule, value, callback) => {
    if (/^[+-]?\d+(\.\d+)?$/.test(value)) {
      callback()
    } else {
      callback(message)
    }
  }
}
export default TicketsPM
