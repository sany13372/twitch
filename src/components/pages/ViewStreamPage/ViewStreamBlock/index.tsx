import { FC } from "react";
import { IStreamsData } from "../../../../types";
import ActionBlock from "../ActionBlock/ActionBlock";
import styles from "./ViewStreamBlock.module.scss";
import AboutBlock from "../../../UI/AboutBlock";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import {convertImgUrl} from "../../../../utils/convertImgUrl";

const ViewStreamBlock: FC<{ user: IStreamsData }> = ({ user }) => {
  const callId = "livestream_fe540aa2-eeee-42c0-875a-0b96d6fa5f6b";
  const client = useStreamVideoClient();
  // const { useParticipants, useParticipantCount } = useCallStateHooks();
  //   const call = client?.call("livestream", callId);
  // call?.join({ create: true });
  // const practs = useParticipants();
  return (
    <div className={styles.block}>
      <img  src={convertImgUrl(user.attributes.videoImg)} alt="Logo"/>
      {/*<StreamCall call={call}>*/}
      {/*<LivestreamLayout/>*/}
      {/*<CustomLivestreamPlayer />*/}
      {/*<LiveStreamView call={call}/>*/}
      {/*</StreamCall>*/}

      <div>
        <ActionBlock user={user} />
        <AboutBlock user={user} />
      </div>
    </div>
  );
};

export default ViewStreamBlock;