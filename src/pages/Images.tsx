'use client'
import Image from 'next/image'

export default function MyProfilePicture() {
  return (
    <div className="p-2 rounded-full w-90 h-90 flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 shadow-lg">
  <Image
    src="/fotominha.jpg"
    width={500}
    height={500}
    alt="Minha foto"
    className="rounded-full object-cover w-full h-full"
    />
  </div>
  )
}