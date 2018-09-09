import React from 'react'
import { Card, Table, Input } from 'antd'
import './index.scss'

const Search = Input.Search

export default class TableContainer extends React.Component {
  state = {
    filterDataSource: [],
    dataSource: []
  }
  componentDidMount() {
    this.setState({ filterDataSource: this.props.tableProps.dataSource })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tableProps.dataSource !== this.props.tableProps.dataSource) {
      this.setState({ filterDataSource: this.props.tableProps.dataSource })
    }
  }

  filterTableDataSource = value => {
    const newData = this.props.tableProps.dataSource.filter(item => {
      for (let key in item) {
        if (this.props.filterByFields.includes(key)) {
          let v = item[key] && item[key].toString().toLowerCase()
          if (v && v.indexOf(value.toLowerCase()) !== -1) {
            return true
          }
        }
      }
      return false
    })
    this.setState({
      filterDataSource: newData
    })
  }

  render() {
    let tableProps = {
      ...this.props.tableProps,
      dataSource: this.state.filterDataSource
    }
    return (
      <Card className="table-container">
        <div className="flex">
          {this.props.filterByFields.length > 0 && (
            <Search
              placeholder="Search"
              onChange={e => this.filterTableDataSource(e.target.value)}
              className="search-filter"
            />
          )}
          <div>{this.props.extra}</div>
        </div>
        <Table {...tableProps} />
      </Card>
    )
  }
}
TableContainer.defaultProps = {
  tableProps: { dataSource: [], columns: [] },
  filterByFields: []
}
