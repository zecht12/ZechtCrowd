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
        <div onClick={()=> onClick(data.id)} className="relative group flex flex-col items-center justify-center rounded-md gap-x">

        </div>
    )
}

export default SongItem