import React, { useContext, useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Get, GetUrl } from './HttpHelper';
import { UPDATE_FILE_INFORMATION_LIST } from './Actions';
import { AppContext } from './MyContext';
import 'antd/dist/antd.css';

const { Dragger } = Upload;

export default function FileUpload() {

    const { dispatch } = useContext(AppContext);
    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(
        () => {
            Get("FileInformation/All").then(
                result => {
                    if (result.status === 200) {
                        dispatch(
                            {
                                type: UPDATE_FILE_INFORMATION_LIST,
                                payload: result.body
                            }
                        );
                    }
                    else {
                        console.log(result.status);
                    }
                }
            )
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [uploadedFile]
    )

    const props = {
        name: 'files',
        multiple: true,
        action: GetUrl("FileInformation"),
        showUploadList: false,
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                setUploadedFile(info);

            } else if (status === 'error') {
                message.success(`${info.file.name} file upload failed.`);
            }
        }
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>
    )
}

