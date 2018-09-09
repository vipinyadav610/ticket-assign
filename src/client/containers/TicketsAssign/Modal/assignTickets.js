import React from 'react'
import { Modal, Button, Form, Select, DatePicker } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 14 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const AssignTickets = props => {
  const { form } = props
  return (
    <Modal
      title="Assign Tickets"
      visible={props.record !== null}
      onCancel={() => props.pm.onAssignModalToggle(null)}
      footer={null}
    >
      <Form onSubmit={props.pm.assignTicketFormSubmit(form)}>
        <FormItem {...formItemLayout} label="Agent">
          {form.getFieldDecorator('agent', {
            rules: [
              {
                required: true,
                message: 'Select an agent!'
              }
            ]
          })(
            <Select placeholder="Select an agent">
              {props.agents.map((row, i) => (
                <Option key={i} value={row.id}>
                  {row.name}
                </Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Date">
          {form.getFieldDecorator('date', {
            rules: [
              {
                required: true,
                message: 'Please select the date!'
              }
            ]
          })(<DatePicker />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Assign
          </Button>
        </FormItem>
      </Form>
    </Modal>
  )
}
export default Form.create()(AssignTickets)
