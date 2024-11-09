import React from 'react';
import OrderForm from './components/OrderForm';
import { ConfigProvider } from 'antd';

const Home: React.FC = () => {
  return (
    <ConfigProvider theme={{}}>
      <OrderForm />
    </ConfigProvider>
  );
}

export default Home;
