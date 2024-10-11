import {FC} from 'react';
import {Call, ParticipantView, useCallStateHooks, useStreamVideoClient} from "@stream-io/video-react-sdk";

const LiveStreamView:FC<{call:Call}> = ({call}) => {
    const {
        useCameraState,
        useMicrophoneState,
        useParticipantCount,
        useIsCallLive,
        useParticipants,
    } = useCallStateHooks();

    const { camera: cam, isEnabled: isCamEnabled } = useCameraState();
    const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState();

    const participantCount = useParticipantCount();
    const isLive = useIsCallLive();
    const client = useStreamVideoClient();
    const practs = useParticipants();
    console.log('PRR',practs)
 return (
     <div style={{ display: "flex", flexDirection: 'column', gap: '4px' }}>
         <div>{isLive ? `Live: ${participantCount}`: `In Backstage`}</div>
         {practs ? <>
             {practs.map((pr) => <ParticipantView participant={pr} />)}
         </> : (
             <div>The host hasn't joined yet</div>
         )}
         <div style={{ display: 'flex', gap: '4px'}}>
             <button onClick={() => (isLive ? call?.stopLive() : call?.goLive({start_hls:true}))}>
                 {isLive ? "Stop Live" : "Go Live"}
             </button>
             <button onClick={() => cam.toggle()}>
                 {isCamEnabled ? "Disable camera" : "Enable camera"}
             </button>
             <button onClick={() => mic.toggle()}>
                 {isMicEnabled ? "Mute Mic" : "Unmute Mic"}
             </button>
         </div>
     </div>
 );
 }

export default LiveStreamView;