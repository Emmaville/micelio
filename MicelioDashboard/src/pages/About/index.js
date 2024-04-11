import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';
import PageFormat from '../../components/PageFormat';
import Api from "../../services/Api";

function Dashboard() {
  const [readmeApi, setReadmeApi] = useState("");

  const getReadmeApi = async () => {
    try {
      const content = await Api.get('/about');
      setReadmeApi(content.data);
    } catch (error) {
      console.error('Error fetching about content:', error);
    }
  }

  useEffect(() => {
    getReadmeApi();
  }, []);

  return (
    <PageFormat menuSelected="dashboard">
      <div className="dashboard-container">
        <ReactMarkdown>
          {readmeApi}
        </ReactMarkdown>
      </div>
    </PageFormat>
  );
}

export default Dashboard;
