"use client";

import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({data,onClick}) => {
    const imagePath = useLoadImage(data);
    return (
        <div>SongItem</div>
    )
}

export default SongItem