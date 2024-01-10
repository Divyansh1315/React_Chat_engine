import {
    ChatEngine,
    MultiChatSocket,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '6a827937-58ca-468d-afee-61f4f010ade0',
        props.user.username,
        props.user.secret
      );

return(
    <div style = {{height: '100vh'}}>
        <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style = {{height: '100%'}} />
      
    </div>
)
  
}

export default ChatsPage