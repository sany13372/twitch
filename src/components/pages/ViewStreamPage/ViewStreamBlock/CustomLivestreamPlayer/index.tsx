import { useEffect, useState } from "react";
import {
    Call,
    ParticipantView,
    StreamCall,
    useCallStateHooks,
    useStreamVideoClient,
} from "@stream-io/video-react-sdk";

export const CustomLivestreamPlayer = () => {

    return (
            <CustomLivestreamLayout />
    );
};

const CustomLivestreamLayout = () => {
    const { useParticipants, useParticipantCount } = useCallStateHooks();
    const participantCount = useParticipantCount();
    const [firstParticipant] = useParticipants();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div>Live: {participantCount}</div>
            {firstParticipant ? (
                <ParticipantView participant={firstParticipant} />
            ) : (
                <div>The host hasn't joined yet</div>
            )}
        </div>
    );
};