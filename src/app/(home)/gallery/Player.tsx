"use client";

import React from "react";

export default function Player() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h2 className="text-xl font-bold mb-4">Video Player</h2>

      {/* Video Wrapper */}
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <video
          controls
          className="w-full h-auto rounded-lg"
          poster="https://via.placeholder.com/800x450" // Ganti dengan poster video
        >
          <source
            src="https://res.cloudinary.com/dmdmyq7b4/video/upload/v1738672682/bhcfn7nuorppydie1yki.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
