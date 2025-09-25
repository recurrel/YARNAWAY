import Layout from '../components/Layout';

export default function ProjectInventory() {
  return (
    <Layout>
      <div className="main-content">
        <h1>Project Inventory</h1>
        <p>Manage your knitting and crochet projects</p>
        <div className="back-button">
          <a href="/">← Back to Main</a>
        </div>
      </div>
    </Layout>
  );
}