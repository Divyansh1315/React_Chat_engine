import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style = {{height: '100vh'}}>
    <PrettyChatWindow
      projectId="6a827937-58ca-468d-afee-61f4f010ade0"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default ChatsPage