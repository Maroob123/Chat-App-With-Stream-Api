import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer } from './components';
import './App.css';

const apiKey = 'qgtk9ttyha7j';
const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
