import React from 'react';
import Moment from 'react-moment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import AdminMenuBar from '../shareComponent/menuBar/index';
import { TalbeHeader, TableData, BlockBtn } from './customerManagementStyled';


function CustomerManagement({ user, handleDeleteUser }) {
    return (
        <Container fluid>
            <Row>
                <AdminMenuBar></AdminMenuBar>
            </Row>
            <Row>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <TalbeHeader headerWidth={'200px'}>User Email</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Date</TalbeHeader>
                            <TalbeHeader headerWidth={'200px'}>Delete User</TalbeHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <TableData>{item.email}</TableData>
                                        <TableData><Moment format="YYYY/MM/DD HH:mm">{item.date}</Moment></TableData>
                                        <TableData><BlockBtn variant="danger"
                                            onClick={() => handleDeleteUser(item._id)}
                                        >Click to Delete</BlockBtn> </TableData>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>

    )
}

export default CustomerManagement;