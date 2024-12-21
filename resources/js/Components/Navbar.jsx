import { Layout, Menu } from 'antd';

const { Header } = Layout;

const labels = ['home', 'about', 'skill', 'project', 'contact'];

const items = labels.map((label, index) => ({
  key: String(index + 1),
  label: label,
}));

export default function App() {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Menambahkan jarak antara label dan menu
        }}
      >
        {/* Label Nama */}
        <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
          Farhan.
        </div>

        {/* Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 0, // Agar menu tidak melar
            justifyContent: 'flex-end', // Memastikan menu berada di kanan
          }}
        />
      </Header>
    </Layout>
  );
}
