import React from 'react';
import MyContext from './MyContext';
import UploadFile from './UploadFile';
import FileList from './FileList';
import { Row, Col, Divider } from 'antd';


export default function App() {
    return (
        <>
            <MyContext>
                <Row align="bottom" justify='center' style={{ "marginTop": 10 }}>
                    <Col xs={22} xl={20} xxl={20}>
                        <UploadFile />
                    </Col>
                </Row>
                <Divider orientation="left" />
                <Row justify='center'>
                    <Col xs={22} sm={22} md={22} lg={22} xl={20} xxl={20}>
                        <FileList />
                    </Col>
                </Row>
            </MyContext>
        </>
    );
}

