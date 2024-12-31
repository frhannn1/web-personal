import React from 'react';
import { Table } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const columns = [
  {
    title: 'id',
    width: 5,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'desc_singkat',
    width: 100,
    dataIndex: 'desc_singkat',
    key: 'desc_singkat',
  },
  {
    title: 'About',
    dataIndex: 'text',
    key: 'text',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => <a>action</a>,
  },
];

  const dataSource = [
    {
      key: '1',
      name: 'Olivia',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Ethan',
      age: 40,
      address: 'London Park',
    },
  ];

export default function TablesDashboard() {
  
        const { styles } = useStyle();
        return (
          <Table
            bordered
            className={styles.customTable}
            columns={columns}
            dataSource={dataSource}
            scroll={{
              x: 'max-content',
            }}
            pagination={false}
          />
    );
  };

