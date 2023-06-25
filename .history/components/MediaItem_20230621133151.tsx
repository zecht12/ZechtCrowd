"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  data,onClick,
}) => {
    const player = usePlayer();
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
        return onClick(data.id);
        }
    
        return player.setId(data.id);
    };

    return (
        <div>MediaItem</div>
    )
}

export default MediaItem