import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Sidebar = (props) => {
  return (
    <div>Sidebar</div>
  )
}

Sidebar.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)