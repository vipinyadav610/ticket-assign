import React from 'react'
import { Layout } from 'antd'
import Sidebar from 'components/SideBar/SideBar'
import ErrorBoundary from 'components/ErrorBoundary'
import { ContentRoute } from 'routes'

const { Header, Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header
          style={{ background: '#28a786a8', padding: 0, height: '108px' }}
        />
        <Content>
          <ErrorBoundary>
            <ContentRoute />
          </ErrorBoundary>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
// AppLayout.propTypes = {}
export default AppLayout
