class SideBarPM {
  constructor(props) {
    this.props = props
  }
  onCollapse = collapsed => {
    this.props.onCollapse(collapsed)
  }
}
export default SideBarPM
