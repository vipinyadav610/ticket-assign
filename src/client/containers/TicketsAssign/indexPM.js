class TicketsPM {
  constructor(props) {
    this.props = props
  }

  onAssignTicketsClick = () => {
    console.log('hello')
  }
  
  onCreateTicketsModalToggle = isVisible => {
    console.log(isVisible)
  }

  handleSubmit = form => {
    return e => {
      e.preventDefault()
    }
  }

   /**
   * To validate phone numbers
   */
  validateNumber = message => (rule, value, callback) => {
    if (/^[+-]?\d+(\.\d+)?$/.test(value)) {
      callback();
    } else {
      callback(message);
    }
  };
}
export default TicketsPM
