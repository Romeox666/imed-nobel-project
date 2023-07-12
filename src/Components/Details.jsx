import React from "react";
import { Table } from "antd";

const Details = (props) => {
  const { dataList } = props;

  const columns = [
    {
      title: 'AwardName',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'AwardYear',
      dataIndex: 'yaer',
      key: 'yaer',
    },
    {
      title: 'Laureates',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Motivation',
      dataIndex: 'motivation',
      key: 'motivation',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-[90vh] w-auto px-8 py-8 bg-orange-50 text-black md:w-full">
      <Table className="w-auto" dataSource={dataList} columns={columns} />
    </div>
  );
};

export default Details;
