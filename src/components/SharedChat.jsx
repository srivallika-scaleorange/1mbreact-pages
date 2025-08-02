import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SharedChatPage() {
  const { shareId } = useParams();
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [password, setPassword] = useState('');

  const fetchChat = async (pwd = '') => {
    try {
      setLoading(true);
      setError(null);

      if (!shareId) {
        throw new Error('❌ Share ID is missing from the URL');
      }

      const url = pwd
        ? `https://dev.1mbhealthy.com/api/v1/share/${shareId}?password=${encodeURIComponent(pwd)}`
        : `https://dev.1mbhealthy.com/api/v1/share/${shareId}`;

      console.log('📡 Fetching from:', url);

      const response = await fetch(url);
      const contentType = response.headers.get('Content-Type');
      console.log('🧾 Status:', response.status);
      console.log('📦 Content-Type:', contentType);

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('✅ Parsed JSON:', data);

        if (!response.ok) {
          if (response.status === 401 && data.requiresPassword) {
            setPasswordRequired(true);
            return;
          }
          throw new Error(data.message || 'Failed to fetch chat');
        }

        if (data.success) {
          setChat(data.data);
          setPasswordRequired(false);
        } else {
          throw new Error(data.message || 'Chat load failed');
        }

      } else {
        const raw = await response.text();
        console.warn('⚠️ Response was not JSON. Raw body:', raw);
        throw new Error('Unexpected response format. Possibly HTML or a proxy issue.');
      }

    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shareId && shareId !== 'undefined') {
      fetchChat();
    } else {
      setError('Invalid share ID');
      setLoading(false);
    }
  }, [shareId]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.trim()) {
      fetchChat(password);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>❌ {error}</div>;

  if (passwordRequired) {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Password Required</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  if (!chat) return <div>Chat not found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <h2>{chat.title || 'Shared Chat'}</h2>
        <small style={{ color: '#666' }}>
          Views: {chat.viewCount} |
          Created: {new Date(chat.createdAt).toLocaleDateString()}
          {chat.expiresAt && ` | Expires: ${new Date(chat.expiresAt).toLocaleDateString()}`}
        </small>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {chat.messages?.map((msg, idx) => (
          <div
            key={idx}
            style={{
              padding: '12px',
              backgroundColor: msg.sender === 'user' ? '#f0f9ff' : '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}
          >
            <div style={{
              fontWeight: 'bold',
              marginBottom: '5px',
              color: msg.sender === 'user' ? '#0066cc' : '#333'
            }}>
              {msg.sender === 'user' ? 'You' : 'Copilot'}
            </div>
            <div style={{ lineHeight: '1.5' }}>
              {msg.message || msg.content || msg.text}
            </div>
          </div>
        )) || <div>No messages found</div>}
      </div>
    </div>
  );
}

export default SharedChatPage;
