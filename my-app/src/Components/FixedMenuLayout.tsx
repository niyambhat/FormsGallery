import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";



function FixedMenuLayout() {
  return (
    <Menu fixed='top' inverted>
      <Container>  <span id="logo">F</span>
        <Menu.Item as='a' header>
                Forms Gallery
        </Menu.Item>
        <Menu.Item as='a'>Bank</Menu.Item>

        <Dropdown item simple text='Banking'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/HomeLoanApplication"> Home Loan Application</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}

export default FixedMenuLayout