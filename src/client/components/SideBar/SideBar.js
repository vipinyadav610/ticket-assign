import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import presenter from 'hoc/presenter'
import SideBarPM from './SideBarPM'
import SidebarContent from './SidebarContent'
import * as Actions from 'actions/sidebar'
import './index.scss'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const SideBar = props => {
  return (
    <Sider
      collapsible
      collapsed={props.collapse}
      onCollapse={props.pm.onCollapse}
      className="app-sidebar"
    >
      <div className="logo" />

      <Menu theme="dark" mode="inline">
        {SidebarContent.map(content => {
          if (content.children.length) {
            return (
              <SubMenu
                key={content.key}
                title={
                  <span>
                    <Icon type={content.icon} />
                    <span>{content.name}</span>
                  </span>
                }
              >
                {content.children.map(child => {
                  return (
                    <Menu.Item key={child.key}>
                      <Link to={child.route}>
                        <Icon type={child.icon} />
                        <span>{child.name}</span>
                      </Link>
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={content.key}>
                <Link to={content.route}>
                  <Icon type={content.icon} />
                  <span>{content.name}</span>
                </Link>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    </Sider>
  )
}

export default presenter(
  store => ({ collapse: store.sidebar.collapse }),
  Actions
)(SideBarPM, SideBar)
