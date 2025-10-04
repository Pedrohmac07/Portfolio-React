'use client'

import ProfileCard from '@/utils/ProfileCard'

export default function MyProfilePicture() {
  return (
    <ProfileCard
    name="Pedro Machado"
    title="Computer Engineering Student"
    handle="Pedro"
    avatarUrl="/EuTransparente.png"
    showUserInfo={false}
    enableTilt={true}
    enableMobileTilt={false}
  />
  )
}