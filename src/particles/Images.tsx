'use client'

import ProfileCard from '@/utils/ProfileCard'

export default function MyProfilePicture() {
  return (
    <ProfileCard
    name="Pedro Machado"
    title="Computer Engineer"
    handle="Pedro"
    status=""
    contactText="Contact Me"
    avatarUrl="/EuTransparente.png"
    showUserInfo={false}
    enableTilt={true}
    enableMobileTilt={false}
    onContactClick={() => console.log('Contact clicked')}
  />
  )
}