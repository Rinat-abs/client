import {Button, Form} from 'antd'
import React from 'react'

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "default" | "text" | "primary" | "dashed" | "ghost";
    danger?: boolean;
    loading?:boolean;
    shape?: "default" | "circle" | "round";
    icon?: React.ReactNode
}

export const CustomButton = ({children, onClick, htmlType = 'button', type, danger, loading, shape, icon}: Props) => {
  return (
    <Form.Item>
        <Button 
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        >{children}</Button>
    </Form.Item>
  )
}
