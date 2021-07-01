import React, { useContext } from 'react';
import { Table } from 'antd';
import { AppContext } from './MyContext';
import { GetUrl } from './HttpHelper';
import 'antd/dist/antd.css';


export default function FileList() {
    const { fileInformationList } = useContext(AppContext);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'fileName',
            key: 'name',
            width: '60%',
            render: (text, record) => <a href={`${GetUrl("FileInformation")}/${record.id}`}>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: 'uploadDateTime',
            key: 'date',
            width: '40%',
        }
    ];

    return (

        <Table
            rowKey={record => record.id}
            columns={columns}
            dataSource={fileInformationList}
            pagination={{ pageSize: 5, hideOnSinglePage: true, position: ["none", "bottomCenter"] }}
            bordered
        />
    )
}