import { AppBar, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{ flexGrow: 1 }}>ToDo List</Typography>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}
