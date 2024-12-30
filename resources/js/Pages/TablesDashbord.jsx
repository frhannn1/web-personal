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
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      fixed: 'left',
    },
    {
        title: 'Action 1',
        fixed: 'right',
        width: 90,
        render: () => <a>action</a>,
      }

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

